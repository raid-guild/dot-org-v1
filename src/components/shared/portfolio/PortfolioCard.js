import React from 'react'
import { Link } from 'gatsby'

const PortfolioCard = ({ projectName, projectTags, link, image }) => (
  <Link to={link} className="Portfolio__Card">
    <div className="Portfolio__CardThumbnail">
      <div
        className="Portfolio__ThumbnailImage"
        style={{ backgroundImage: 'url(' + image + ')' }}
      ></div>
    </div>
    <div className="Portfolio_CardContent">
      <h6>{projectName}</h6>
      <div className="Portfolio_CardTags">
        {projectTags.map(tag => (
          <span>{tag}</span>
        ))}
      </div>
    </div>
  </Link>
)

export default PortfolioCard
