import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddCourse from './AddCourse'
import '../styles/featuredCourses.css'

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
    <div className="everyCourse">
      <div className="titleCourse">
        <h1>Featured Golf Courses</h1>
        <h3>Contribute to our community by adding a new course</h3>
      </div>
      <div className="addCourseForm">
        {newCourse && (
          <AddCourse
            toggleNewCourse={toggleNewCourse}
            getCourses={getCourses}
          />
        )}
      </div>
      <div className="allCourses">
        {!newCourse && (
          <button onClick={toggleNewCourse} className="addBtn">
            Add New Course?
          </button>
        )}
      </div>
      <div className="center">
        <div className="coursesCards">
          {courses.slice(-3).map((course) => (
            <div className="courseCard">
              <div className="name-img">
                <div className="name">
                  <h3>{course.name}</h3>
                </div>
              </div>
              <div className="courseImage2">
                <div className="courseImage">
                  <img src={course.img} className="courseMap" />
                  <button onClick={() => showCourses(course)} className="view">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
