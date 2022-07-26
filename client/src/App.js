import './App.css'
import Landing from './pages/Landing'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './components/Nav'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'

function App() {
  const [courses, setCourses] = useState([])
  // let navigate = useNavigate()
  useEffect(() => {
    const getCourses = async () => {
      const res = await axios.get('http://localhost:3001/api/courses')
      setCourses(res.data.courses)
      console.log(res.data.courses)
    }
    getCourses()
  }, [])

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
            element={<Courses courses={courses} key={courses._id} />}
          />
          <Route
            path="/courses/:id"
            element={<CourseDetails courses={courses} />}
          />
        </Routes>
      </body>
    </div>
  )
}

export default App
