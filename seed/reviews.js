const db = require('../db/index')
const { Review, Course } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const courseId = await Course.find({ name: 'Hamlet at Wind Watch' })
  const reviews = {
    first_name: 'Austin',
    last_name: 'LePorin',
    review: {
      course_id: courseId[0]._id,
      user: 'aleporin',
      comment: 'Great course shot a 90',
      rating: '5/5'
    }
  }
  await Review.insertMany(reviews)
  console.log('Created Reviews')
}

const run = async () => {
  await main()
  db.close()
}

run()
