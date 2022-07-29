import React from 'react'
import '../styles/allCourses.css'
import { Navigate, useNavigate } from 'react-router-dom'

const AllCourses = ({ courses }) => {
  let navigate = useNavigate()
  const showCourses = (course) => {
    navigate(`${course._id}`)
  }
  return (
    <div className="lastPage">
      <div className="allCourses">
        <h1> All Courses </h1>
      </div>
      <div className="coursesCards">
        {courses.map((course) => (
          <div className="courseCard">
            <div className="name-img">
              <div className="name">
                <h3>{course.name}</h3>
              </div>
            </div>
            <div className="courseImage2">
              <div className="courseImage">
                <img src={course.img} className="courseMap" />
                <button onClick={() => showCourses(course)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllCourses
