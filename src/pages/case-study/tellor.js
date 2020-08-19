import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout/layout'


import IconHelm from '../../components/shared/icons/IconHelm'
import IconAxes from '../../components/shared/icons/IconAxes'
import IconCrown from '../../components/shared/icons/IconCrown'
import IconMagic from '../../components/shared/icons/IconMagic'
import IconArrow from '../../components/shared/icons/IconArrow'
import IconRaidGuild from '../../images/raidguild__icon.png'

import PixelArcher from '../../images/characters/archer.png'
import PixelPaladin from '../../images/characters/paladin.png'

import RaiderBox from '../../components/shared/cards/RaiderBox'

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
								<RaiderBox
									raiderName="Ven"
									raiderRole="Design"
									characterImage={PixelArcher}
								/>
								<RaiderBox
									raiderName="Sam"
									raiderRole="Full-Stack Dev"
									characterImage={PixelPaladin}
								/>
		          </div>
		        </div>
		      </div>
		    </div>
				<div className="Block PrimaryBG">
		      <div className="Block__Contents Contain800">
						<h2 className="IconHeader"><IconAxes /> Our Approach</h2>
						<p>
							We began the raid with a quick sprint to deeply understand the Tellor oracle system from a technical and brand level. With this understanding in place, we then ran simultaneous audits on the codebase and user experience. Through the process, we came up with many actionable directives to improve performance and usability of the Dispute Center and the Price Feed.
						</p>
		      </div>
		    </div>
				<div className="Block">
		      <div className="Block__Contents">
						<div className="Contain800">
							<h2 className="IconHeader"><img src={IconRaidGuild} /> Our Solution</h2>
							<p> On the tech side, we replaced raw contract calls by building a custom subgraph which enhanced both experiences of the developers maintaining the data, and users fetching the data. </p>
							<p> On the design side, we were able to greatly simplify the user experience through a combination of better information architecture and contextual micro-interactions. In the end, we expanded the Tellor visual language into a micro design system that works in light and dark mode, including a new custom loading animation to match.						</p>
						</div>
						<div className="SectionSeparator">
							<hr />
						</div>
						<div className="Grid">
							<div className="CaseStudy__List Column Column--50" >
								<h4>Activities</h4>
								<span>UX Audit</span>
								<span>Code Review</span>
								<span>UI Design</span>
								<span>Frontend Development</span>
								<span>Backend Development</span>
							</div>
							<div className="CaseStudy__List Column Column--50">
								<h4>Deliverables</h4>
								<span>2 Web3 Apps (Dispute Center, Price Feed)</span>
								<span>Micro Style Guide</span>
							</div>
			      </div>
					</div>
		    </div>
				<div className="Block SecondaryBG">
		      <div className="Block__Contents Contain800">
						<h2 className="IconHeader"><IconMagic /> Results</h2>
						<p>
							We delivered two Web3 applications. One for their Dispute Center and another for the Price Feed.
						</p>
						<Link className="Button" to="https://disputes.tellorscan.com/">
              View Final Product <IconArrow />
            </Link>
						<Link className="Button" to="https://github.com/tellor-io/tellorDisputeCenter">
              View Codebase <IconArrow />
            </Link>
		      </div>
		    </div>
				<div className="Block">
		      <div className="Block__Contents Contain800 TextCenter">
						<h2 className="Secondary">Client Testimonial</h2>
						<p>
							"RaidGuild has been an amazing experience from start to finish, great guys in an awesome DAO and I'd highly recommend them for whatever the project"
						</p>
						<code className="tag"> - The Mandalore, Tellor.io </code>
		      </div>
		    </div>
			</div>
    </Layout>
)

export default TellorCaseStudyPage
