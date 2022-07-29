import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import '../styles/courseDetails.css'

const CourseDetails = ({
  reviewState,
  handleChange,
  handleSubmit,
  toggleShowForm,
  showForm,
  reviews
}) => {
  const [courseDetails, setCourseDetails] = useState([])

  let { courseid } = useParams()
  console.log(courseid)
  const getCourseId = async () => {
    const res = await axios.get(`http://localhost:3001/api/courses/${courseid}`)
    setCourseDetails(res.data)
  }
  useEffect(() => {
    getCourseId()
  }, [])

  return (
    <div className="singleDescriptions">
      <div className="courseName">
        <h1>{courseDetails.name}</h1>
      </div>
      <div className="location">
        <h2>{courseDetails.location}</h2>
      </div>
      <div className="courseDesc">
        <h3>{courseDetails.description} </h3>
        {showForm && (
          <ReviewForm
            reviewState={reviewState}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            reviews={reviews}
          />
        )}
      </div>

      <div className="courseDescription">
        <div className="leaveReview">
          {/* <div>
            {showForm && (
              <ReviewForm
                reviewState={reviewState}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                reviews={reviews}
              />
            )}
          </div> */}
          {!showForm && (
            <button onClick={toggleShowForm} className="enterReview">
              Leave a review?
            </button>
          )}
        </div>
        <div className="courseDesc">
          <img src={courseDetails.img} className="image1" />
          <img src={courseDetails.map_img} className="image2" />
          {showForm && (
            <ReviewForm
              reviewState={reviewState}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              reviews={reviews}
            />
          )}
        </div>
        {/* <div className="reviewForm">
          {showForm && (
            <ReviewForm
              reviewState={reviewState}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              reviews={reviews}
            />
          )}
        </div> */}
      </div>
      <div className="phoneNum">
        <ul>{courseDetails.phone_num}</ul>
        <ul>{courseDetails.url}</ul>
      </div>
      {/* <div className="leaveReview">
        {!showForm && (
          <button onClick={toggleShowForm} className="enterReview">
            Leave a review?
          </button>
        )}
      </div> */}

      <div>
        {showForm && (
          <ReviewForm
            reviewState={reviewState}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            reviews={reviews}
          />
        )}
      </div>
      <div>
        <ReviewList courseid={courseid} reviews={reviews} />
      </div>
    </div>
  )
}

export default CourseDetails
