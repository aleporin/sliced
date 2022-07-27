import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Courses = (props) => {
  const [courses, setCourses] = useState([])
  let navigate = useNavigate()
  useEffect(() => {
    const getCourses = async () => {
      const res = await axios.get('http://localhost:3001/api/courses')
      setCourses(res.data.courses)
      console.log(res.data.courses)
    }
    getCourses()
  }, [])

  const showCourses = (course) => {
    navigate(`${course._id}`)
  }
  return (
    <div>
      <h1>Golf Courses</h1>
      <div className="allCourses">
        {props.courses.map((course) => (
          <div
            className="courseCard"
            onClick={() => showCourses(course)}
            key={course.id}
            style={{
              minWidth: '60em'
            }}
          >
            <h3>{course.name}</h3>
            <img src={course.img} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
