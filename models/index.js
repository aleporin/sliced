const mongoose = require('mongoose')
const CourseSchema = require('./course')
const ReviewSchema = require('./review')

const Course = mongoose.model('Course', CourseSchema)
const Review = mongoose.model('Review', ReviewSchema)

module.exports = {
  Course,
  Review
}
