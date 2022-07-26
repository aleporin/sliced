const { Course, Review } = require('../models')

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({})
    return res.status(200).json({ courses })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getReviewsByCourse = async (req, res) => {
  try {
    const reviews = await Review.find({ course: req.params.courseid })
    return res.json(reviews)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const getCourseByID = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseid)
    return res.json(course)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteReview = async (req, res) => {
  try {
    const { reviewid } = req.params
    const deleted = await Review.findByIdAndDelete(reviewid)
    if (deleted) {
      return res.status(200).send('Review deleted')
    }
    throw new Error('Review not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateReview = async (req, res) => {
  try {
    const { reviewid } = req.params
    const review = await Review.findByIdAndUpdate(reviewid, req.body, {
      new: true
    })
    res.status(200).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCourses,
  createReview,
  getReviews,
  getReviewsByCourse,
  deleteReview,
  updateReview,
  getCourseByID
}
