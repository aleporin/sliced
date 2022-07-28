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
      <h1>Golf Courses</h1>
      {newCourse && (
        <AddCourse toggleNewCourse={toggleNewCourse} getCourses={getCourses} />
      )}
      {!newCourse && <button onClick={toggleNewCourse}>Add New Course?</button>}
      <div className="allCourses">
        {courses.map((course) => (
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
