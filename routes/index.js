const { Router } = require('express')
const controllers = require('../controllers/courseController')

const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/courses', controllers.getCourses)
router.post('/reviews', controllers.createReview)
router.post('/courses', controllers.createCourse)
router.get('/reviews', controllers.getReviews)
router.get('/reviews/:courseid', controllers.getReviewsByCourse)
router.get('/courses/:courseid', controllers.getCourseByID)
router.put('/reviews/:reviewid', controllers.updateReview)
router.delete('/reviews/:reviewid', controllers.deleteReview)

module.exports = router
