const { Router } = require('express')
const controllers = require('../controllers/courseController')

const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/courses', controllers.getCourses)
router.post('/reviews', controllers.createReview)
router.get('/reviews', controllers.getReviews)
router.delete('/reviews/:reviewid', controllers.deleteReview)
router.get('/reviews/:courseid', controllers.getReviewsByCourse)

module.exports = router
