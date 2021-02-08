import React from 'react'
import { Link } from 'gatsby'

const PortfolioCard = ({ projectName, projectTags, link, image }) => (
  <Link to={link} className="Portfolio__Card">
    <div className="Portfolio__CardThumbnail">
      <video autoPlay muted loop>
        <source src={image} type="video/mp4" />
        "Your browser does not support the video tag."
      </video>
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
