import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './header.css'

export default function Header() {
  return (
    <header>
      <div className="headerContent">
        <img src={logo} alt="logo" className="logo" />
        <nav className="navHeader">
          <NavLink className="navLink" to="/">
            <span className="number">00</span>
            HOME
          </NavLink>
          <NavLink className="navLink" to="/destination">
            <span className="number">01</span>
            DESTINATION
          </NavLink>
          <NavLink className="navLink" to="/crew">
            <span className="number">02</span>
            CREW
          </NavLink>
          <NavLink className="navLink" to="/technology">
            <span className="number">03</span>
            TECHNOLOGY
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
