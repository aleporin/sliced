const { Router } = require('express')
const controllers = require('../controllers/courseController')

const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/courses', controllers.getCourses)
router.post('/courses', controllers.createReview)

module.exports = router
