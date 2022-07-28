import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <Link to="" className="navSliced">
          {' '}
          sliced
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
