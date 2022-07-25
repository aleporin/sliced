const db = require('../db/index')
const { Course } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // const courseReviews = await Course.find({name: })
  const courses = [
    {
      name: 'Hamlet at Wind Watch',
      location: 'Hauppauge, NY',
      url: 'https://www.invitedclubs.com/clubs/wind-watch-golf-country-club',
      img: 'https://longislandgolfcamps.com/wp-content/uploads/2016/02/wind-watch.jpg',
      phone_num: '(631) 232-9850',
      description:
        'This superbly landscaped and maintained daily fee course is unique to Long Island with water potentially coming into play on thirteen holes.  Starting out at one of the highest points on Long Island, our elevated first hole will challenge your skills and capture your attention with stunning views of the North Shore of Long Island.  Our course provides a thoroughly enjoyable experience for all of our golfers with four sets of tees. The black tees play at 6,686 yards, the blue tees at 6,614 yards, the white tees at 6,030 yards, and the red tees at 5,178 yards.',
      // reviews: [],
      map_img: 'https://imgur.com/a/qj5OhgE'
    },
    {
      name: 'Willow Creek Golf & Country Club ',
      location: 'Mount Sinai, NY',
      url: 'https://www.invitedclubs.com/clubs/willow-creek-golf-country-club',
      img: 'https://www.invitedclubs.com/globalassets/willow-creek-golf--country-club/_images/willow-creek-clubhouse-18_1920.jpg?format=webp',
      phone_num: '(631) 474-9200',
      description: `The Management & Staff at Willow Creek Golf & Country Club want you and your golf league to experience Long Island's best kept secret today. Tucked away in beautiful Mount Sinai along the north shore of Long Island, Willow Creek is the premier destination for your golf. Let us help you spend more time practicing and less time planning. Not only can we host your next event, we can also help you secure other venues for your season like the stunning Wind Watch Golf & County Club in Hauppauge.The black tees play at 6,610 yards, the blue tees at 6,289 yards, the white tees at 5,810 yards, and the red tees at 5,013 yards.`,
      // reviews: [],
      map_img: 'https://imgur.com/C4XowyD'
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
