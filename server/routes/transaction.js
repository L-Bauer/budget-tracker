const express = require('express')
const app = express()
const pool = require('../startup/db')

// Routes
// create a transaction
app.post('/', async (req, res) => {
  try {
    // Get the category_id based on users selection
    const { category, sub_category } = req.body
    const category_id = await pool.query(
      `SELECT category_id FROM category 
        WHERE category=($1) AND sub_category=($2)`,
      [category, sub_category]
    )
    const cat_id = category_id.rows[0].category_id

    // Get the budget_id based on the users selection for the category
    const { budget } = req.body
    const budget_id = await pool.query(
      `SELECT budget_id FROM budget
      WHERE category_id=($1)`,
      [cat_id]
    )
    const budgetId = budget_id.rows[0].budget_id
    console.log(budgetId)
    // const { transaction_date, budget_id, expense_income, amount } = req.body
    // const newTrans = await pool.query(
    //   'INSERT INTO transaction (date, budget_id, expense_income, price) VALUES ($1, $2, $3, $4) RETURNING *',
    //   [transaction_date, budget_id, expense_income, amount]
    // )
    // res.json(newTrans.rows[0])
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
