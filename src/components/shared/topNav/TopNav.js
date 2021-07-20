import React, { useState } from 'react'
import { Link } from 'gatsby'

import './TopNav.scss'
const TopNav = () => {
  const [navOpen, setNavOpen] = useState(false)

  const hamburgerClass = navOpen
    ? 'navbar__hamburger hamburger hamburger--spin is-active'
    : 'navbar__hamburger hamburger hamburger--spin'

  const mobileNavClass = navOpen
    ? 'TopNav__Mobile TopNav__Mobile--Open'
    : 'TopNav__Mobile'

  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <>
      <nav className="TopNav__Desktop">
        <a href="https://raidguild.org/#manifesto">Manifesto</a>
        <a href="https://raidguild.org/#services">Services</a>
        <a href="https://raidguild.org/portfolio">Portfolio</a>
        <a href="https://raidguild.org/join">Join</a>
        <a
          href="https://hireus.raidguild.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire
        </a>
      </nav>
      {/* Start Hamburger */}
      <button className={hamburgerClass} type="button" onClick={toggleNav}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <div className={mobileNavClass}>
        <div className="TopNav__Mobile--Contents">
          <a href="/#manifesto" onClick={toggleNav}>
            Manifesto
          </a>
          <a href="/#services" onClick={toggleNav}>
            Services
          </a>
          <Link to="/portfolio" onClick={toggleNav}>
            Portfolio
          </Link>
          <Link to="/join" onClick={toggleNav}>
            Join
          </Link>
          <a
            href="https://hireus.raidguild.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire
          </a>
        </div>
      </div>
      {/* End Hamburger */}
    </>
  )
}

export default TopNav
