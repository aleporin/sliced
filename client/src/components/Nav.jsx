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
            Golf Courses
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
