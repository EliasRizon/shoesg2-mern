'use strict'

import Shoe from '../models/shoe.js'

export const getShoes = async (req, res) => {
  try {
    const shoes = await Shoe.find().sort({ 'pricing.price': 1 })

    res.json({ data: shoes })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getShoe = async (req, res) => {
  const { slug } = req.params

  try {
    const shoes = await Shoe.findOne({ shoeId: slug })

    res.status(200).json(shoes)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
