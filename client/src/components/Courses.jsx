import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddCourse from './AddCourse'

const Courses = ({ courses, getCourses }) => {
  let navigate = useNavigate()
  const [newCourse, setNewCourse] = useState(false)

  const showCourses = (course) => {
    navigate(`${course._id}`)
  }

  const toggleNewCourse = () => {
    setNewCourse(!newCourse)
  }
  return (
    <div className="flex">
      <div className="allCourses">
        <h1>Featured Golf Courses</h1>
        {newCourse && (
          <AddCourse
            toggleNewCourse={toggleNewCourse}
            getCourses={getCourses}
          />
        )}
        {!newCourse && (
          <button onClick={toggleNewCourse}>Add New Course?</button>
        )}
        {courses.slice(-3).map((course) => (
          <div onClick={() => showCourses(course)} key={course.id}>
            <h3>{course.name}</h3>
            <img src={course.img} className="courseMap" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
