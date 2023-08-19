const express = require('express')
const cors = require('cors')

// routes
// const transactionRouter = require('../routes/transaction')
const holdingsRouter = require('../routes/holding')
const categoryRouter = require('../routes/category')
const budgetRouter = require('../routes/budget')

module.exports = function (app) {
  // middleware
  app.use(cors())
  app.use(express.json())

  // app.use('/transaction', transactionRouter)
  app.use('/holdings', holdingsRouter)
  app.use('/category', categoryRouter)
  app.use('/budget', budgetRouter)
}
