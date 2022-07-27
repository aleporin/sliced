import { useEffect, useState } from 'react'
import axios from 'axios'

const ReviewList = ({ courseid, reviews }) => {
  const [reviewByCourse, setReviewsByCourse] = useState([])

  const getReviews = async () => {
    const res = await axios.get(`http://localhost:3001/api/reviews/${courseid}`)
    setReviewsByCourse(res.data)
  }
  useEffect(() => {
    getReviews()
  }, [reviews])

  const deleteReview = async (id) => {
    const res = await axios.delete(`http://localhost:3001/api/reviews/${id}`)
    getReviews()
  }

  return (
    <div>
      {reviewByCourse?.map((review) => (
        <div className="singleReview">
          <div className="commentBox">Comment:{review.comment}</div>
          <button onClick={() => deleteReview(review._id)}>delete</button>
        </div>
      ))}
    </div>
  )
}
export default ReviewList
