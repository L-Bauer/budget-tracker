const express = require('express')
const cors = require('cors')
const pool = require('./server/db')
const app = express()
const PORT = 5000

// middleware
app.use(cors())
app.use(express.json())

// Routes
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

// get all transactions
app.get('/transactions', async (req, res) => {
  try {
    const allTransactions = await pool.query('SELECT * FROM transactions')
    res.json(allTransactions.rows)
  } catch (err) {
    console.error(err)
  }
})

// update a transaction
app.put('/transactions/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { item, price } = req.body
    const updateTransaction = await pool.query(
      'UPDATE transactions SET item = $1, price = $2 WHERE trans_id = $3',
      [item, price, id]
    )
    res.json(`Transaction ${id} was updated`)
  } catch (err) {
    console.error(err)
  }
})

// delete a transaction
app.delete('/transactions/:id', async (req, res) => {
  try {
    const { id } = req.params
    const transToDelete = await pool.query(
      'DELETE FROM transactions WHERE trans_id = $1',
      [id]
    )
    res.json('Transaction was deleted:(')
    console.log('transaction is deleted.')
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log('Server has started on port ' + PORT)
})
