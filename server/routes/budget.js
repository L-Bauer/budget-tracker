const express = require('express')
const app = express()
const pool = require('../startup/db')

/*
Routes
Table: Budget
Columns: budget_id(pk), category_id(fk), holding_id(fk), min_amount, goal_amount
*/

// create a budget item
app.post('/', async (req, res) => {
  try {
    // Get the category_id based the users selection for category and sub-category
    const { category, sub_category } = req.body
    const category_id = await pool.query(
      `SELECT category_id FROM category 
        WHERE category=($1) AND sub_category=($2)`,
      [category, sub_category]
    )
    const cat_id = category_id.rows[0].category_id

    // Get the holding_id based on holding name
    const { holding } = req.body
    const holding_id = await pool.query(
      `SELECT holding_id FROM holdings
      WHERE holding=($1)`,
      [holding]
    )

    const hold_id = holding_id.rows[0].holding_id

    // Insert budget amounts into budget
    const { min_amount, goal_amount } = req.body
    const newBudget = await pool.query(
      `INSERT INTO budget
        (category_id, holding_id, min_amount, goal_amount)
        VALUES ($1, $2, $3, $4) RETURNING *`,
      [cat_id, hold_id, min_amount, goal_amount]
    )
    res.json(newBudget.rows[0])
  } catch (err) {
    console.log(err.message)
  }
})

module.exports = app
