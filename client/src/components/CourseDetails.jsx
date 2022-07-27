import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
    getCourseId()
  }, [])

  useEffect(() => {
    const getReviews = async () => {
      try {
        let res = await axios.get('http://localhost:3001/api/reviews')
        setReviews(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getReviews()
  }, [])

  const handleChange = (event) => {
    setReviewState({ ...reviewState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setReviewState({ ...reviewState, course: courseid })
    let res = await axios.post(
      `http://localhost:3001/api/reviews/`,
      setReviewState
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
      <div className="form-field">
        <form onSubmit={handleSubmit} className="review-field">
          <input
            type="text"
            id="user"
            placeholder="username"
            onChange={handleChange}
            value={reviewState.user}
            className="user"
          />
          <select
            id="rating"
            onChange={handleChange}
            value={reviewState.rating}
          >
            <option>Rate this course out of 5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <textarea
            id="comment"
            cols="20"
            rows="5"
            onChange={handleChange}
            value={reviewState.comment}
            placeholder="Leave a review?"
            className="reviewField"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="reviewSubmit"></div>
      </div>
    </div>
  )
}

export default CourseDetails
