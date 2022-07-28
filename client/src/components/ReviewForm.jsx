import { useParams } from 'react-router-dom'

const ReviewForm = ({ handleChange, handleSubmit, reviewState }) => {
  let { courseid } = useParams()
  console.log(courseid)
  return (
    <div className="form-container">
      <h1 className="reviewHeader">Add New Review</h1>
      <div className="formStyle">
        <form onSubmit={(e) => handleSubmit(e, courseid)}>
          <div className="userRating">
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
          </div>

          <textarea
            id="comment"
            cols="20"
            rows="5"
            onChange={handleChange}
            value={reviewState.comment}
            placeholder="Leave a review?"
            className="reviewField"
          />
          <div className="reviewSubmitBtn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm
