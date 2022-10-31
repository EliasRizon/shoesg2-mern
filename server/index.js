'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import shoesRoutes from './routes/shoeRoutes.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/shoes', shoesRoutes)

const CONNECTION_URL =
  'mongodb+srv://ngothuan2422001:Ngovanthuan2001@thuanscluster.mxk3ruo.mongodb.net/shoesg2?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5001

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`),
    ),
  )
  .catch((error) => console.log(`${error} did not connect`))
