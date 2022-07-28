import axios from 'axios'
import { useState } from 'react'

const AddCourse = ({ toggleNewCourse, getCourses }) => {
  const [addCourse, setAddCourse] = useState([])
  const defaultCourse = {
    name: '',
    location: '',
    url: '',
    img: '',
    phone_num: '',
    description: ''
  }

  const [newCourse, setNewCourse] = useState(defaultCourse)

  const handleChange = (event) => {
    setNewCourse({ ...newCourse, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(newCourse)
    let res = await axios.post(`http://localhost:3001/api/courses/`, {
      ...newCourse
    })
    getCourses()
    setNewCourse(defaultCourse)
    toggleNewCourse()
  }
  return (
    <div>
      <form className="newCourse" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id="img"
          onChange={handleChange}
          placeholder="Add image (optional)"
        />
        <input
          type="text"
          id="location"
          onChange={handleChange}
          placeholder="Where is the course located?"
        />
        <input
          type="text"
          id="name"
          onChange={handleChange}
          placeholder="Course Name"
        />
        <input
          type="text"
          id="phone_num"
          onChange={handleChange}
          placeholder="Course Phone Number (optional)"
        />
        <input
          type="text"
          id="url"
          onChange={handleChange}
          placeholder="Course website (optional)"
        />
        <textarea
          id="description"
          onChange={handleChange}
          placeholder="Leave a review"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddCourse
