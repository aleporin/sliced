const { Schema } = require('mongoose')

const Review = new Schema(
  {
    id: { type: String, required: true },
    user: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Review
