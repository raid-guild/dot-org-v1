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
          href="https://discord.gg/rGFpfQf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Discord
        </a>
        <a
          className="Nav__Link"
          href="https://github.com/orgs/raid-guild/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
        <a
          className="Nav__Link"
          href="https://medium.com/raid-guild"
          rel="noopener noreferrer"
          target="_blank"
        >
          Medium
        </a>
        <a
          className="Nav__Link"
          href="https://handbook.raidguild.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Handbook
        </a>
      </nav>
    </div>
  </div>
)

export default Footer
