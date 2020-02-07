import React from 'react'
import { Link } from 'gatsby'
import TopNav from '../topNav/TopNav'

import Brand from '../../../images/raidguild__logo.png'
import './header.scss'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="Header__Contents">
      <Link className="Logo" to={`/`}>
        <img src={Brand} alt="Brand" />
      </Link>
      <TopNav />
    </div>
  </div>
)

export default Header
