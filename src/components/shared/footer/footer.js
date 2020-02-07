import React from 'react'
import { Link } from 'gatsby'

import Brand from '../../../images/raidguild__logo.png'
import './footer.scss'

const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="Footer__Contents">
      <Link className="Logo" to={`/`}>
        <img src={Brand} alt="Brand" />
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
