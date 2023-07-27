const express = require('express')
const cors = require('cors')
const pool = require('./db')
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log('Server has started on port ' + PORT)
})

// create a transaction
app.post('/transactions', async (req, res) => {
  try {
    const { item, price, record_time } = req.body
    const newTrans = await pool.query(
      'INSERT INTO transactions (item, price, record_time) VALUES ($1, $2, $3) RETURNING *',
      [item, price, record_time]
    )
    res.json(newTrans.rows[0])
  } catch (error) {
    console.log(error.message)
  }
})
