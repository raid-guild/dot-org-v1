import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout/layout'


import IconHelm from '../../components/shared/icons/IconHelm'
import IconAxes from '../../components/shared/icons/IconAxes'
import IconCrown from '../../components/shared/icons/IconCrown'
import IconMagic from '../../components/shared/icons/IconMagic'
import IconRaidGuild from '../../images/raidguild__icon.png'

const TellorCaseStudyPage = () => (
	<Layout>
      <div className="Hero Portfolio BackgroundImage" name="portfolio">
        <div className="Hero__Contents">
          <h1>
            Tellor
          </h1>
				  <p>
				  	Design and build the Tellor Dispute Center, along with its Price Feed, for visual cohesion and to simplify both user and dev experience for ease of use and future maintainability.
				  </p>
        </div>
        <div className="HeroBorder" />
      </div>
			<div className="CaseStudy">
				<div className="Block">
		      <div className="Block__Contents">
		        <div className="Grid">
		          <div className="Column Column--50" >
								<h2>The Challenge</h2>
								<p>
									The first iteration of the Tellor Dispute Center functioned okay, but had its fair share of bugs, usability flaws, and was built in a way that made it hard to maintain and improve quickly. On the design side, there wasn’t really a fleshed out style guide to work with, so some visual design would be necessary.
								</p>
		          </div>
		          <div className="Column Column--50">
		    				<h3>Raiders</h3>
								<div className="CaseStudy__Raiders">
									<div className="CaseStudy__RaiderCard">
										<h6>Spencer</h6>
										<code>product</code>
									</div>
								</div>
		          </div>
		        </div>
		      </div>
		    </div>
				<div className="Block PrimaryBG">
		      <div className="Block__Contents">
						<h2 className="IconHeader"><IconAxes /> Our Approach</h2>
						<p>
							We began the raid with a quick sprint to deeply understand the Tellor oracle system from a technical and brand level. With this understanding in place, we then ran simultaneous audits on the codebase and user experience. Through the process, we came up with many actionable directives to improve performance and usability of the Dispute Center and the Price Feed.
						</p>
		      </div>
		    </div>
				<div className="Block">
		      <div className="Block__Contents">
						<div className="Grid">
							<div className="Column Column--50" >
								<h4>Activities</h4>
								<p>Usability Testing</p>
							</div>
							<div className="Column Column--50">
								<h4>Deliverables</h4>
								<p>Full-Featured Web3 Application</p>
							</div>
			      </div>
						<div className="SectionSeparator">
							<hr />
						</div>
						<h2 className="IconHeader"><img src={IconRaidGuild} /> Our Solution</h2>
						<p>
							We began the raid with a quick sprint to deeply understand the Tellor oracle system from a technical and brand level. With this understanding in place, we then ran simultaneous audits on the codebase and user experience. Through the process, we came up with many actionable directives to improve performance and usability of the Dispute Center and the Price Feed.
						</p>
					</div>
		    </div>
			</div>
    </Layout>
)

export default TellorCaseStudyPage
