import UserModel from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secretKey = 'test'

export const signin = async (req, res) => {
  const { email, password } = req.body

  try {
    const oldUser = await UserModel.findOne({ email })

    if (!oldUser)
      return res.status(404).json({ message: 'Tài khoản không tồn tại' })

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Bạn đã nhập sai mật khẩu' })

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      secretKey,
      {
        expiresIn: '1h',
      },
    )

    res.status(200).json({ result: oldUser, token })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, phone } = req.body

  try {
    const oldUser = await UserModel.findOne({ email })

    if (oldUser)
      return res
        .status(400)
        .json({ message: 'Tài khoản này đã có người sử dụng' })

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await UserModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
    })

    const token = jwt.sign({ email: result.email, id: result._id }, secretKey, {
      expiresIn: '1h',
    })

    res.status(201).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })

    console.log(error)
  }
}
