const db = require('../db/index')
const { Review, Course } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  Review.collection.drop()
  const courseId = await Course.findOne({ name: 'Hamlet at Wind Watch' })
  const reviews = {
    user: 'aleporin',
    comment: 'Great course shot a 90',
    rating: '5/5',
    course: courseId._id
  }
  await Review.insertMany(reviews)
  console.log('Created Reviews')
}

const run = async () => {
  await main()
  db.close()
}

run()
