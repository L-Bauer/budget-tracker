const express = require('express')
const cors = require('cors')

// routes
// const transactionRouter = require('../routes/transaction')
const holdingsRouter = require('../routes/holding')

module.exports = function (app) {
  // middleware
  app.use(cors())
  app.use(express.json())

  // app.use('/transaction', transactionRouter)
  app.use('/holdings', holdingsRouter)
}
