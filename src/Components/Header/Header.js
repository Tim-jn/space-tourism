import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './header.css'
import { useEffect, useState } from 'react'
import burgerMenu from './icon-hamburger.svg'
import closeIcon from './icon-close.svg'

export default function Header() {
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
      const media = window.matchMedia(query)
      if (media.matches !== matches) {
        setMatches(media.matches)
      }
      const listener = () => setMatches(media.matches)
      window.addEventListener('resize', listener)
      return () => window.removeEventListener('resize', listener)
    }, [matches, query])

    return matches
  }

  const isDesktop = useMediaQuery('(min-width: 601px)')

  const [toggle, setToggle] = useState(false)

  const toggleMenu = () => {
    setToggle(!toggle)
  }

  return (
    <header>
      <div className="headerContent">
        <img src={logo} alt="logo" className="logo" />
        {isDesktop ? (
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
        ) : (
          <>
            <img
              onClick={toggleMenu}
              src={!toggle ? burgerMenu : closeIcon}
              alt="Menu icon"
              className="burgerMenuIcon"
            />
            {toggle ? (
              <nav className="navHeader">
                <div className="navContent">
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
                </div>
              </nav>
            ) : (
              ''
            )}
          </>
        )}
      </div>
    </header>
  )
}
