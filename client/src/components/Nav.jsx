import { Link } from 'react-router-dom'
import '../styles/nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <Link to="" className="navSliced">
          {' '}
          <img src="https://i.imgur.com/VMyxiv5.png" width={90} height={50} />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/courses" className="navSliced">
            {' '}
            Featured Courses
          </Link>
          <Link to="/allcourses" className="navSliced">
            {' '}
            View All Courses
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
