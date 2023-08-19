const express = require('express')
const app = express()
const pool = require('../startup/db')

// Routes
// create a transaction
app.post('/', async (req, res) => {
  try {
    const { transaction_date, item, price } = req.body
    const newTrans = await pool.query(
      'INSERT INTO transaction (transaction_date, item, price) VALUES ($1, $2, $3) RETURNING *',
      [transaction_date, item, price]
    )
    res.json(newTrans.rows[0])
  } catch (error) {
    console.log(error.message)
  }
})

// get all transaction
app.get('/', async (req, res) => {
  try {
    const allTransactions = await pool.query('SELECT * FROM transaction ORDER BY trans_id')
    res.json(allTransactions.rows)
  } catch (err) {
    console.error(err)
  }
})

// update a transaction
app.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { item, price } = req.body
    const updateTransaction = await pool.query(
      'UPDATE transaction SET item = $1, price = $2 WHERE trans_id = $3',
      [item, price, id]
    )
    res.json(`Transaction ${id} was updated`)
  } catch (err) {
    console.error(err.message)
  }
})

// delete a transaction
app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const transToDelete = await pool.query(
      'DELETE FROM transaction WHERE trans_id = $1',
      [id]
    )
    res.json('Transaction was deleted:(')
    console.log('transaction is deleted.')
  } catch (error) {
    console.log(error)
  }
})

module.exports = app
