const express = require('express')
const cors = require('cors')
const pool = require('./db')
const app = express()
const PORT = 5432

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log('Server has started on port ' + PORT)
})
