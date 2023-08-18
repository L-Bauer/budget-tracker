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
  } catch (error) {
    console.log(error)
  }
})

module.exports = app
