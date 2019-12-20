import React from 'react'
import { Link } from 'gatsby'
import TopNav from '../topNav/TopNav'

import Brand from '../../../images/raidguild__icon.png'
import './header.scss'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="Header__Contents">
      <Link className="Logo" to={`/`}>
        <img src={Brand} alt="Brand" />
        <h1 className="Logo__Type">{siteTitle}</h1>
      </Link>
      <TopNav />
    </div>
  </div>
)

export default Header
