// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      className="wave-logo"
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
    />

    <ul className="nav-links-container">
      <li className="heading">
        <Link to="/" className="link-tag">
          Home
        </Link>
      </li>
      <li className="heading">
        <Link to="/about" className="link-tag">
          About
        </Link>
      </li>
      <li className="heading">
        <Link to="/contact" className="link-tag">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
