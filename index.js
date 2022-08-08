import express from 'express'
import dotenv from 'dotenv'
const app = express()

dotenv.config()

app.get('/', (_, res) => {
  return res.send({ message: 'Hello, world!' })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  return console.log('abc')
})
