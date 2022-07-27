import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState([])
  const [reviews, setReviews] = useState([])
  const initialState = {
    user: '',
    course: '',
    comment: '',
    rating: ''
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
        let res = await axios.get('http://localhost:3001/reviews')
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
    let res = await axios.post('http://localhost:3001/issues', reviewState)
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
      <div>
        <form>
          <input
            type="text"
            id="user"
            placeholder="username"
            onChange={handleChange}
            value={reviewState.user}
          />
          <input placeholder=""></input>
          <input placeholder=""></input>
          <textarea placeholder=""></textarea>
        </form>
      </div>
    </div>
  )
}

export default CourseDetails
