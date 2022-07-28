const db = require('../db/index')
const { Course } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  Course.collection.drop()
  const courses = [
    {
      name: 'Mill Pond Golf Course ',
      location: 'Medford, NY',
      url: 'https://www.golfatmillpond.com/',
      img: 'https://www.golfatmillpond.com/wp-content/uploads/sites/7798/2020/03/maxresdefault-1.jpg',
      phone_num: '(631) 732-8249',
      description: `Mill Pond Golf Course is a beautiful, 18 hole championship golf course located in Medford, NY on Long Island. Mill Pond offers the public golfer a rare treat: incredible golf coupled with superb service and all the amenities one would expect at a private club. The links style layout situated on over 200 acres is reminiscent of classic Scottish courses. Designed by Course Architect William “Buddy” Johnson, Mill Pond opened in 1999 and is recognized by Audubon International for Environmental Excellence. Online Tee Times can be made up to 7 days in advance. The blue tees play at 6,304 yards, the white tees at 5,966 yards, the gold tees at 5,156 yards, and the red tees at 4,831 yards.`,
      map_img: 'https://i.imgur.com/VQOziFg.png'
    },
    {
      name: 'Spring Lake Golf Club',
      location: 'Middle Island, NY',
      url: 'https://www.springlakegolfclub.com/',
      img: 'https://www.springlakegolfclub.com/images/widgetkit/course/course%20(3).jpg',
      phone_num: '(631) 924-5115',
      description: `Spring Lake Golf Course and Catering, a 27-hole public facility, is located in the heart of Long Island, NY in Middle Island. The New York golf course is just off the Long Island Expressway's exit 64 North and only minutes from the Port Jefferson Ferry. The sprawling 180-acre NY golf center is adjacent to a stunning lake providing eye dazzling views and features a perfect backdrop for your golf outing.The gold tees play at 7,035 yards, the blue tees at 6,445 yards, the white tees at 6,011 yards, and the red tees at 5,366 yards.`,
      map_img: 'https://i.imgur.com/UwRHpo5.png'
    },
    {
      name: 'Stonebridge Golf Links',
      location: 'Hauppauge, NY',
      url: 'https://www.stonebridgeglcc.com/',
      img: 'https://www.golfstonebridgeutah.com/images/template/home-photo.jpg',
      phone_num: '(631) 724-7500',
      description: `The 18-hole Stonebridge course at the Stonebridge Golf Links & Country Club facility in Smithtown, New York features 6,245 yards of golf from the longest tees for a par of 70 . The course rating is 71.0 and it has a slope rating of 127.`,
      map_img: 'https://i.imgur.com/fIk9LMR.png'
    },
    {
      name: 'Hamlet at Wind Watch',
      location: 'Hauppauge, NY',
      url: 'https://www.invitedclubs.com/clubs/wind-watch-golf-country-club',
      img: 'https://longislandgolfcamps.com/wp-content/uploads/2016/02/wind-watch.jpg',
      phone_num: '(631) 232-9850',
      description:
        'This superbly landscaped and maintained daily fee course is unique to Long Island with water potentially coming into play on thirteen holes.  Starting out at one of the highest points on Long Island, our elevated first hole will challenge your skills and capture your attention with stunning views of the North Shore of Long Island.  Our course provides a thoroughly enjoyable experience for all of our golfers with four sets of tees. The black tees play at 6,686 yards, the blue tees at 6,614 yards, the white tees at 6,030 yards, and the red tees at 5,178 yards.',
      map_img: 'https://i.imgur.com/hNwNQsS.png'
    },
    {
      name: 'The Rock Golf Club',
      location: 'Wading River, NY',
      url: 'https://playtherockgolf.com/',
      img: 'https://golf-pass.brightspotcdn.com/dims4/default/1388f2d/2147483647/strip/true/crop/1440x350+0+0/resize/1440x350!/quality/90/?url=https%3A%2F%2Fgolf-pass-brightspot.s3.amazonaws.com%2F55%2Fe7%2F7c7b478d4bdbba7e8764361e0483%2F1440x350.jpg',
      phone_num: '(631) 886-2950',
      description: `Not far from Wading River, Great Rock offers terrific views and challenging play for golfers at every skill level. Well-groomed fairways and greens keep Great Rock difficult yet friendly, and the staff can offer tips and tricks for playing your best round.`,
      map_img: 'https://i.imgur.com/4jPb1TP.png'
    },
    {
      name: 'Pine Hills Golf and Country Club',
      location: 'Manorville, NY',
      url: 'https://www.pinehillsccgolf.com/',
      img: 'https://golf-pass.brightspotcdn.com/dims4/default/4f0783f/2147483647/strip/true/crop/1187x668+0+386/resize/590x332!/format/jpg/quality/90/?url=https%3A%2F%2Fgolf-pass-brightspot.s3.amazonaws.com%2F5b%2F9e%2F50c9a77d7f84cd48a971a568d112%2F3362.jpg',
      phone_num: '(631) 878-7103',
      description: `Welcome to Pine Hills Golf & Country Club! This hidden gem is tucked away on 165 acres of Long Island's protected Pine Barrens. Once here, you will be whisked away into another land filled with plush fairways lined with majestic pine trees that will lead you to enchanted greens. Pine Hills Golf & Country Club facility in Manorville, New York features 7,132 yards of golf from the longest tees for a par of 73. The course rating is 74.4 and it has a slope rating of 131..`,
      map_img: 'https://i.imgur.com/DNO2B4W.png'
    },
    {
      name: 'Town of Osyter Bay Golf Course ',
      location: 'Woodbury, NY',
      url: 'https://oysterbaytown.com/departments/parks/golf-course/',
      img: 'https://www.golfonlongisland.com/.a/6a00e553e875538833017eeb41420d970d-600wi',
      phone_num: '(516) 677-5980',
      description: `Situated on 121 acres, the Town's 18-hole, par 70, championship golf course features narrow fairways, water holes, sand and grass bunkers, as well as a putting green. A turn-of-the-century mansion offers The Mansion at Oyster Bay Catering facility and Clubhouse Grille. Golfers can also take a break at the “Halfway House”, located on the 8th tee, with amenities such as restroom facilities and a snack bar.`,
      map_img: 'https://i.imgur.com/YLORJoz.png'
    },
    {
      name: 'Willow Creek Golf & Country Club ',
      location: 'Mount Sinai, NY',
      url: 'https://www.invitedclubs.com/clubs/willow-creek-golf-country-club',
      img: 'https://www.invitedclubs.com/globalassets/willow-creek-golf--country-club/_images/willow-creek-clubhouse-18_1920.jpg?format=webp',
      phone_num: '(631) 474-9200',
      description: `The Management & Staff at Willow Creek Golf & Country Club want you and your golf league to experience Long Island's best kept secret today. Tucked away in beautiful Mount Sinai along the north shore of Long Island, Willow Creek is the premier destination for your golf. Let us help you spend more time practicing and less time planning. Not only can we host your next event, we can also help you secure other venues for your season like the stunning Wind Watch Golf & County Club in Hauppauge.The black tees play at 6,610 yards, the blue tees at 6,289 yards, the white tees at 5,810 yards, and the red tees at 5,013 yards.`,
      map_img: 'https://i.imgur.com/oZrCofU.png'
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
