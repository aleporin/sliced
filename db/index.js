const mongoose = require('mongoose')
let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/slicedDB'

// let dbUrl = 'mongodb://127.0.0.1:27017/slicedDB'
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
