import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/courseDetails.css'

const EditForm = ({ review, toggleReview, getReviews }) => {
  const initialState = {
    user: review.user,
    comment: review.comment,
    rating: review.rating
  }
  const [formValue, setFormValue] = useState(initialState)

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.id]: event.target.value })
  }

  const { courseid } = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(`/api/reviews/${review._id}`, {
      ...formValue,
      course: courseid
    })
    toggleReview()
    getReviews()
  }
  return (
    <div className="form-container">
      <div>
        <form onSubmit={(e) => handleSubmit(e)} className="review-field">
          <input
            type="text"
            id="user"
            placeholder="username"
            onChange={handleChange}
            value={formValue.user}
            className="user"
          />
          <select id="rating" onChange={handleChange} value={formValue.rating}>
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
            value={formValue.comment}
            placeholder="Leave a review?"
            className="reviewField"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditForm
