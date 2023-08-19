const express = require('express')
const app = express()
const pool = require('../startup/db')

/*
Routes
These routes affect the category and sub-category of a budget item.
Ex:
  House -> Mortgage
  House -> Utility
*/

// create a category
app.post('/', async (req, res) => {
  try {
    const { category, sub_category } = req.body
    const newCategory = await pool.query(
      'INSERT INTO category (category, sub_category ) VALUES ($1, $2) RETURNING *',
      [category, sub_category]
    )
    res.json(newCategory.rows[0])
  } catch (err) {
    console.log(err.message)
  }
})

// Show all categories
app.get('/', async (req, res) => {
  try {
    const allCategories = await pool.query('SELECT * FROM category ORDER BY category_id')
    res.json(allCategories.rows)
  } catch (err) {
    console.log(err.message)
  }
})

// Delete category
app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await pool.query(
      'DELETE FROM category WHERE category_id = $1',
      [id]
    )
    res.json('Category was deleted:(')
    console.log('Category is deleted.')
  } catch (err) {
    console.log(err.message)
  }
})

module.exports = app
