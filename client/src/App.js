import './App.css'
import Landing from './pages/Landing'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './components/Nav'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import { useParams } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'
import AddCourse from './components/AddCourse'
import AllCourses from './components/AllCourses'

function App() {
  const [courses, setCourses] = useState([])
  // let navigate = useNavigate()
  const [reviews, setReviews] = useState([])
  const initialState = {
    user: '',
    comment: '',
    rating: '',
    course: ''
  }
  const [addCourse, setAddCourse] = useState([])
  const defaultCourseState = {
    name: '',
    location: '',
    url: '',
    img: '',
    phone_num: '',
    description: ''
  }

  const [newCourse, setNewCourse] = useState(defaultCourseState)
  const [reviewState, setReviewState] = useState(initialState)
  const [showForm, setShowForm] = useState(false)

  const getCourses = async () => {
    const res = await axios.get('/api/courses/')
    setCourses(res.data.courses)
    console.log(res.data.courses)
  }
  useEffect(() => {
    getCourses()
  }, [])

  let { courseid } = useParams()
  console.log(courseid)

  const getReviews = async () => {
    try {
      let res = await axios.get(`/api/reviews`)
      setReviews(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getReviews()
  }, [])

  const handleChange = (event) => {
    setReviewState({ ...reviewState, [event.target.id]: event.target.value })
  }

  const toggleShowForm = () => {
    setShowForm(!showForm)
  }

  const handleSubmit = async (event, courseid) => {
    event.preventDefault()
    // setReviewState({ ...reviewState, course: courseid })
    console.log(reviewState)
    let res = await axios.post(`/api/reviews/`, {
      ...reviewState,
      course: courseid
    })
    toggleShowForm()
    setReviewState(initialState)
    getReviews()
  }

  return (
    <div className="App">
      <header className="navBar">
        <Nav />
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/courses"
            element={
              <Courses
                courses={courses}
                courseid={courseid}
                getCourses={getCourses}
              />
            }
          />
          <Route
            path="/courses/:courseid"
            element={
              <CourseDetails
                reviewState={reviewState}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                toggleShowForm={toggleShowForm}
                showForm={showForm}
                reviews={reviews}
              />
            }
          />
          <Route
            path="/allcourses/:courseid"
            element={
              <CourseDetails
                reviewState={reviewState}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                toggleShowForm={toggleShowForm}
                showForm={showForm}
                reviews={reviews}
              />
            }
          />
          <Route
            path="/allcourses"
            element={<AllCourses courses={courses} getCourses={getCourses} />}
          />
        </Routes>
      </body>
    </div>
  )
}

export default App
