require('dotenv').config()
require('./src/config')
const express = require('express')
const app = express()

const PORT = AppConfig.PORT

console.log(AppConfig.HOST)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Express app listening at ${PORT}`)
})