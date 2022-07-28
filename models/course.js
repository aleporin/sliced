const { Schema } = require('mongoose')

const Course = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    url: { type: String, required: false },
    img: { type: String, required: true },
    phone_num: { type: String, required: false },
    description: { type: String, required: true },
    map_img: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Course
