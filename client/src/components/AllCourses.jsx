import React from 'react'

const AllCourses = ({ courses }) => {
  return (
    <div>
      <div>
        <h1> All Courses </h1>
        {courses.map((course) => (
          <div>
            <h3>{course.name}</h3>
            <img src={course.img} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllCourses
