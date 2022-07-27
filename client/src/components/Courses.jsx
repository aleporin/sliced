import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Courses = ({ courses }) => {
  let navigate = useNavigate()

  const showCourses = (course) => {
    navigate(`${course._id}`)
  }
  return (
    <div>
      <h1>Golf Courses</h1>
      <div className="allCourses">
        {courses.map((course) => (
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
