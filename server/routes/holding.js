const express = require('express')
const app = express()
const pool = require('../startup/db')

// Routes
// create a holding
app.post('/', async (req, res) => {
  try {
    const { holding } = req.body
    const newHolding = await pool.query(
      'INSERT INTO holdings (holding) VALUES ($1) RETURNING *',
      [holding]
    )
    res.json(newHolding.rows[0])
  } catch (err) {
    console.log(err.message)
  }
})

// get all holdings
app.get('/', async (req, res) => {
  try {
    const allHoldings = await pool.query('SELECT * FROM holdings ORDER BY holding_id')
    res.json(allHoldings.rows)
  } catch (err) {
    console.error(err.message)
  }
})

module.exports = app
