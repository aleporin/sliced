const db = require('../db/index')
const { Review } = require('../models/review')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const Reviews = [
    {
      id: '1',
      user: 'aleporin',
      comment:
        'I had an awesome round here. The clubhouse workers were all nice, and the cart girl was awesome! It was a great round, I shot a 90.',
      rating: '10/10'
    }
  ]
  await Review.insertMany(reviews)
  console.log('Created Reviews')
}

const run = async () => {
  await main()
  db.close()
}

run()
