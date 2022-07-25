const { Course } = require('../models')

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({})
    return res.status(200).json({ courses })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCourses
}
