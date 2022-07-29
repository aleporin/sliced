import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import '../styles/courseDetails.css'
import EditForm from './EditForm'

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
    const res = await axios.get(`/api/courses/${courseid}`)
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

      <div className="h3">
        <h3>{courseDetails.description}</h3>
        {!showForm && (
          <button onClick={toggleShowForm} className="enterReview">
            Leave a review?
          </button>
        )}
      </div>
      <div className="wrapper">
        <div className="courseDesc">
          <div>
            <img src={courseDetails.map_img} className="image2" />
            <img src={courseDetails.img} className="image1" />
          </div>
        </div>
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
        <div className="reviewss">
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
          <ReviewList courseid={courseid} reviews={reviews} />
        </div>
      </div>
      <div className="phoneNum">
        <ul>{courseDetails.phone_num}</ul>
        <ul>{courseDetails.url}</ul>
      </div>
    </div>
  )
}

export default CourseDetails
