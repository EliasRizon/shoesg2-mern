'use strict'

import express from 'express'
import { getShoe, getShoes } from '../controllers/shoeController.js'

const router = express.Router()
router.get('/:slug', getShoe)
router.get('/', getShoes)

export default router
