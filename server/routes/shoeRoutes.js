'use strict'

import express from 'express'
import { getShoes } from '../controllers/shoeController.js'

const router = express.Router()
router.get('/', getShoes)

export default router
