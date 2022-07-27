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
  const [reviewState, setReviewState] = useState(initialState)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const getCourses = async () => {
      const res = await axios.get('http://localhost:3001/api/courses')
      setCourses(res.data.courses)
      console.log(res.data.courses)
    }
    getCourses()
  }, [])

  let { courseid } = useParams()
  console.log(courseid)

  useEffect(() => {
    const getReviews = async () => {
      try {
        let res = await axios.get(
          `http://localhost:3001/api/reviews/${courseid}`
        )
        setReviews(res.data)
      } catch (err) {
        console.log(err)
      }
    }
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
    let res = await axios.post(`http://localhost:3001/api/reviews/`, {
      ...reviewState,
      course: courseid
    })
    toggleShowForm()
    setReviewState(initialState)
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
            element={<Courses courses={courses} courseid={courseid} />}
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
              />
            }
          />
        </Routes>
      </body>
    </div>
  )
}

export default App
