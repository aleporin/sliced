const db = require('../db')
const { Course } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const courses = [
    {
      name: 'Hamlet at Wind Watch',
      location: 'Hauppauge, NY',
      url: 'https://www.invitedclubs.com/clubs/wind-watch-golf-country-club',
      img: 'https://longislandgolfcamps.com/wp-content/uploads/2016/02/wind-watch.jpg',
      phone_num: '(631) 232-9850',
      description:
        'This superbly landscaped and maintained daily fee course is unique to Long Island with water potentially coming into play on thirteen holes.  Starting out at one of the highest points on Long Island, our elevated first hole will challenge your skills and capture your attention with stunning views of the North Shore of Long Island.  Our course provides a thoroughly enjoyable experience for all of our golfers with four sets of tees. The black tees play at 6,686 yards, the blue tees at 6,614 yards, the white tees at 6,030 yards, and the red tees at 5,178 yarsds.',
      reviews: [],
      map_img: ''
    }
  ]
  await Course.insertMany(courses)
  console.log('Created Courses')
}

const run = async () => {
  await main()
  db.close()
}

run()
