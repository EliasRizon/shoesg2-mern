'use strict'

import mongoose from 'mongoose'

const pricingSchema = mongoose.Schema({
  price: Number,
})

const shoeSchema = mongoose.Schema({
  shoeId: String,
  name: String,
  description: String,
  image: Array,
  brand: String,
  selectedFile: String,
  backgroundColor: String,
  pricing: pricingSchema,
  likes: { type: [String], default: [] },
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

var Shoe = mongoose.model('Shoe', shoeSchema)

export default Shoe
