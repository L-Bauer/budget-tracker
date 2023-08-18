const express = require('express')
const app = express()
const PORT = 5000

// middleware
app.use(express.json())

require('./startup/routes')(app)

app.listen(PORT, () => {
  console.log('Server has started on port ' + PORT)
})
