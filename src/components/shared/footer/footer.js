import React from 'react'
import { Link } from 'gatsby'

import Brand from '../../../images/raidguild__icon.png'
import './footer.scss'

const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="Footer__Contents">
      <Link className="Logo" to={`/`}>
        <img src={Brand} alt="Brand" />
        <h1 className="Logo__Type">{siteTitle}</h1>
      </Link>
      <nav className="Nav">
        <Link to={`/contact`}>Contact</Link>
        <a
          className="Nav__Link"
          href="https://twitter.com/RaidGuild"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>
        <a
          className="Nav__Link"
          href="https://github.com/orgs/raid-guild/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
      </nav>
    </div>
  </div>
)

export default Footer
