import React from 'react'
import { Link } from 'gatsby'

const PortfolioCard = ({ projectName, projectTags, link, image }) => (
	<Link to={link}>
		<div className="Portfolio__Card">
		  <div className="Portfolio__CardThumbnail">
				<img src={image} />
				<h2>{projectName}</h2>
				{ projectTags.map(tag => <p>{tag}</p>) }
		  </div>
		</div>
	</Link>
)

export default PortfolioCard;
