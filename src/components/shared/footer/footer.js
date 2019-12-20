import React from 'react'
import { Link } from 'gatsby'
import Brand from '../../../images/Brutal__Icon.png'

import './footer.scss'

const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="Footer__Contents">
      <Link className="Logo" to="/">
        <img src={Brand} alt="Brand" />
        <h1 className="Logo__Type">
            {siteTitle}
        </h1>
      </Link>
      <nav className="Nav">
        <Link to="library">Library</Link>
      </nav>
    </div>
  </div>
)

export default Footer
