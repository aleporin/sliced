import { useEffect, useState } from 'react'
import axios from 'axios'
import EditForm from './EditForm'
import '../styles/editForm.css'

const ReviewList = ({ courseid, reviews }) => {
  const [reviewByCourse, setReviewsByCourse] = useState([])
  const [editReview, setEditReview] = useState(false)

  const getReviews = async () => {
    const res = await axios.get(`/api/reviews/${courseid}`)
    setReviewsByCourse(res.data)
  }
  useEffect(() => {
    getReviews()
  }, [reviews])

  const deleteReview = async (id) => {
    const res = await axios.delete(`/api/reviews/${id}`)
    getReviews()
  }

  const toggleReview = () => {
    setEditReview(!editReview)
  }

  const updateReview = async (id) => {
    const res = await axios.put(`/api/reviews/${id}`)
  }

  return (
    <div>
      {reviewByCourse?.map((review) => (
        <div className="singleReview">
          {editReview && (
            <EditForm
              review={review}
              toggleReview={toggleReview}
              getReviews={getReviews}
            />
          )}
          <div className="commentBox">Comment:{review.comment}</div>
          <div className="commentBox">Username:{review.user}</div>
          <div className="commentBox">{review.rating}/5</div>
          <button onClick={() => deleteReview(review._id)}>delete</button>
          <div>
            {!editReview && <button onClick={toggleReview}>edit</button>}
          </div>
        </div>
      ))}
    </div>
  )
}
export default ReviewList
