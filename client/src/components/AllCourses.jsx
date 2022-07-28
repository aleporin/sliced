import React from 'react'
import '../styles/allCourses.css'

const AllCourses = ({ courses }) => {
  return (
    <div className="lastPage">
      <h1> All Courses </h1>
      <div className="div">
        {courses.map((course) => (
          <div>
            <h3>{course.name}</h3>
            <img src={course.img} className="courseMap" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllCourses
