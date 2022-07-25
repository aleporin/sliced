const { Schema } = require('mongoose')

const Review = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    review: {
      course_id: { type: Schema.Types.ObjectId, ref: 'Course' },
      user: { type: String, required: true },
      comment: { type: String, required: true },
      rating: { type: String, required: true }
    }
  },
  { timestamps: true }
)

module.exports = Review
