const { Schema } = require('mongoose')

const Course = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    url: { type: String, required: true },
    img: { type: String, required: true },
    phone_num: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: String, required: true },
    yardage: { type: String, required: true }
  },
  { timestamps: true }
)
