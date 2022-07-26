import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState({})
  let { id } = useParams()

  return (
    <div>
      <h1>{courseDetails.name}</h1>
    </div>
  )
}

export default CourseDetails
