import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faUser,
  faLock,
  faEnvelope,
  faPhone,
  faSignature,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Auth.module.scss'
import { signin, signup } from '~/actions/authActions'
import GoogleLogin from 'react-google-login'
import { AUTH } from '~/constants/actionTypes'

const cn = classNames.bind(styles)

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function Auth() {
  const [isSignup, setIsSignup] = useState(false)
  const [form, setForm] = useState(initialState)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const switchMode = () => {
    setForm(initialState)
    setIsSignup((prevIsSignup) => !prevIsSignup)
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSignup) {
      dispatch(signup(form, navigate))
    } else {
      dispatch(signin(form, navigate))
    }
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId

    try {
      dispatch({ type: AUTH, data: { result, token } })
      console.log(result)

      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const googleError = () =>
    console.log('Google Sign In was unsuccessful. Try again later')

  return (
    <div className={cn('limiter')}>
      <div className={cn('container-login100')}>
        <div className={cn('wrap-login100')}>
          <form
            className={cn('login100-form', 'validate-form')}
            onSubmit={handleSubmit}
          >
            <span className={cn('login100-form-title')}>
              {isSignup ? 'Đăng Ký' : 'Đăng Nhập'}
            </span>

            {isSignup && (
              <>
                <div style={{ display: 'flex' }}>
                  <div
                    className={cn('wrap-input100', 'validate-input')}
                    data-validate="Username is reauired"
                  >
                    <span className={cn('label-input100')}>Họ:</span>
                    <div style={{ display: 'flex' }}>
                      <input
                        className={cn('input100')}
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                      />
                      <FontAwesomeIcon
                        className={cn('input-icon')}
                        icon={faUser}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div style={{ width: '60px' }}></div>
                  <div
                    className={cn('wrap-input100', 'validate-input')}
                    data-validate="Username is reauired"
                  >
                    <span className={cn('label-input100')}>Tên:</span>
                    <div style={{ display: 'flex' }}>
                      <input
                        className={cn('input100')}
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                      />
                      <FontAwesomeIcon
                        className={cn('input-icon')}
                        icon={faSignature}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
                <div
                  className={cn('wrap-input100', 'validate-input')}
                  style={{ marginTop: '23px' }}
                  data-validate="Username is reauired"
                >
                  <span className={cn('label-input100')}>Số Điện Thoại:</span>
                  <div style={{ display: 'flex' }}>
                    <input
                      className={cn('input100')}
                      type="text"
                      name="phone"
                      onChange={handleChange}
                    />
                    <FontAwesomeIcon
                      className={cn('input-icon')}
                      icon={faPhone}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </>
            )}

            <div
              className={cn('wrap-input100', 'validate-input')}
              style={{ marginTop: '23px' }}
              data-validate="Username is reauired"
            >
              <span className={cn('label-input100')}>Email:</span>
              <div style={{ display: 'flex' }}>
                <input
                  className={cn('input100')}
                  type="text"
                  name="email"
                  onChange={handleChange}
                />
                <FontAwesomeIcon
                  className={cn('input-icon')}
                  icon={faEnvelope}
                ></FontAwesomeIcon>
              </div>
            </div>

            <div
              className={cn('wrap-input100', 'validate-input')}
              style={{ marginTop: '23px' }}
              data-validate="Password is required"
            >
              <span className={cn('label-input100')}>Mật Khẩu:</span>
              <div style={{ display: 'flex' }}>
                <input
                  className={cn('input100')}
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                <FontAwesomeIcon
                  className={cn('input-icon')}
                  icon={faLock}
                ></FontAwesomeIcon>
              </div>
            </div>

            {!isSignup ? (
              <div className={cn('forgot-pass')}>
                <a className={cn('forgot-pass-link', 'a-signin')} href="/">
                  Quên Mật Khẩu?
                </a>
              </div>
            ) : (
              <div
                className={cn('wrap-input100', 'validate-input')}
                style={{ marginTop: '23px', marginBottom: '23px' }}
                data-validate="Password is required"
              >
                <span className={cn('label-input100')}>Nhập Lại Mật Khẩu:</span>
                <div style={{ display: 'flex' }}>
                  <input
                    className={cn('input100')}
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                  <FontAwesomeIcon
                    className={cn('input-icon')}
                    icon={faLock}
                  ></FontAwesomeIcon>
                </div>
              </div>
            )}

            <div className={cn('container-login100-form-btn')}>
              <div className={cn('wrap-login100-form-btn')}>
                <div className={cn('login100-form-bgbtn')}></div>
                <button className={cn('login100-form-btn')} type="submit">
                  {isSignup ? 'Đăng Ký' : 'Đăng Nhập'}
                </button>
              </div>
            </div>

            <div
              className={cn('txt1')}
              style={{
                textAlign: 'center',
                paddingTop: '45px',
                paddingBottom: '20px',
              }}
            >
              <span>Hoặc Đăng Nhập Bằng:</span>
            </div>

            <div className={cn('flex-c-m')}>
              <div href="/" className={cn('login100-social-item', 'bg1')}>
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </div>

              <div href="/" className={cn('login100-social-item', 'bg2')}>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </div>

              <GoogleLogin
                clientId="564033717568-bu2nr1l9h31bhk9bff4pqbenvvoju3oq.apps.googleusercontent.com"
                render={(renderProps) => (
                  <div
                    className={cn('login100-social-item', 'bg3')}
                    onClick={renderProps.onClick}
                  >
                    <i className={cn('fa fa-google')}></i>
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                  </div>
                )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin"
              />
            </div>

            <div
              className={cn('flex-col-c')}
              style={{ paddingTop: `${isSignup ? '44px' : '100px'}` }}
            >
              <span className={cn('txt1')} style={{ paddingBottom: '17px' }}>
                {isSignup ? 'Bạn đã có tài khoản?' : 'Bạn chưa có tài khoản?'}
              </span>

              <div
                onClick={switchMode}
                className={cn('a-signin')}
                style={{ fontSize: '16px' }}
              >
                {isSignup ? 'Đăng Nhập' : 'Đăng Ký'}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
