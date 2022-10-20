'use strict'

import Shoe from '../models/shoes.js'

export const getShoes = async (req, res) => {
  try {
    const shoes = await Shoe.find().sort({ price: 1 })

    res.json({ data: shoes })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
