const { Schema } = require('mongoose')

const Review = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    user: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course' }
  },
  { timestamps: true }
)

module.exports = Review
