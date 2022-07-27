import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState([])
  const [reviews, setReviews] = useState([])
  const initialState = {
    user: '',
    comment: '',
    rating: '',
    course: ''
  }
  const [reviewState, setReviewState] = useState(initialState)

  let { courseid } = useParams()
  console.log(courseid)

  useEffect(() => {
    const getCourseId = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/courses/${courseid}`
      )
      setCourseDetails(res.data)
    }
    const getReviews = async () => {
      try {
        let res = await axios.get(
          `http://localhost:3001/api/reviews/${courseid}`
        )
        setReviews(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getReviews()
    getCourseId()
  }, [])

  const handleChange = (event) => {
    setReviewState({ ...reviewState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setReviewState({ ...reviewState, course: courseid })
    console.log(reviewState)
    let res = await axios.post(
      `http://localhost:3001/api/reviews/`,
      reviewState
    )
    console.log(res)
    setReviewState(initialState)
  }

  return (
    <div>
      <h1>{courseDetails.name}</h1>
      <h2>{courseDetails.location}</h2>
      <h3>{courseDetails.description}</h3>
      <div className="oneImage">
        <img src={courseDetails.img} />
        <img src={courseDetails.map_img} />
      </div>
      <div className="details">
        <ul>{courseDetails.phone_num}</ul>
        <ul>{courseDetails.url}</ul>
      </div>
      <ReviewForm
        reviewState={reviewState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default CourseDetails
