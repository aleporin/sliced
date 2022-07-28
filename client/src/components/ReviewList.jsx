import { useEffect, useState } from 'react'
import axios from 'axios'

const ReviewList = ({ courseid, reviews }) => {
  const [reviewByCourse, setReviewsByCourse] = useState([])
  const [editReview, setEditReview] = useState(false)

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

  const toggleReview = () => {
    setEditReview(!editReview)
  }

  const updateReview = async (id) => {
    const res = await axios.put(`http://localhost:3001/api/reviews/${id}`)
  }

  return (
    <div>
      <form>
        {reviewByCourse?.map((review) => (
          <div className="singleReview">
            <div className="commentBox">Comment:{review.comment}</div>
            <div className="commentBox">Username:{review.user}</div>
            <div className="commentBox">{review.rating}/5</div>
            <button onClick={() => deleteReview(review._id)}>delete</button>
            <div>
              <button onClick={() => toggleReview(true)}>edit</button>
            </div>
          </div>
        ))}
      </form>
    </div>
  )
}
export default ReviewList
