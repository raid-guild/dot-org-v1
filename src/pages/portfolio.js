import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

import RaidTeeImg from '../images/raid__fantasy--tee-technicolor.png'
import DaohausLogo from '../images/projects/daohaus__logo--white.png'
import PokemolLogo from '../images/projects/pokemol__brand--invert.png'
import MetaCartelLogo from '../images/projects/meta_chill.png'
import MolochLogo from '../images/projects/moloch__logo--red.png'
import ImagePlaceholder from '../images/image-placeholder.png'

import IconHelm from '../components/shared/icons/IconHelm'
import IconAxes from '../components/shared/icons/IconAxes'
import IconCrown from '../components/shared/icons/IconCrown'
import IconMagic from '../components/shared/icons/IconMagic'

import PortfolioCard from '../components/shared/PortfolioCard'

const PortfolioPage = () => (
	<Layout>
      <div className="Hero BackgroundImage">
        <div className="Hero__Contents">
          <h1>
            Portfolio
          </h1>
				  <p>
				  	Our Trophy Shelf of Achievements from Past Raids
				  </p>
        </div>
        <div className="HeroBorder" />
      </div>
      <div className="Column">
        <div className="Portfolio__Cards">
	        <PortfolioCard
						projectName="Tellor"
						projectTags={['Design', 'Full-Stack Dev']}
						link="/case-study/tellor"
						image={ImagePlaceholder}
					/>
					<PortfolioCard
						projectName="Minion"
						projectTags={['UX/UI', 'Code Audit', 'Full-stack Dev']}
						link="/case-study/tellor"
						image={ImagePlaceholder}
					/>
					<PortfolioCard
						projectName="Stake on Me"
						projectTags={['UI/UX', 'Copywriting', 'Full-stack Dev']}
						link="/case-study/tellor"
						image={ImagePlaceholder}
					/>
					<PortfolioCard
						projectName="Wrapeth"
						projectTags={['UI/UX', 'Visual Design', 'Full-stack Dev']}
						link="/case-study/tellor"
						image={ImagePlaceholder}
					/>
					<PortfolioCard
						projectName="Aragon Metrics Dashboard"
						projectTags={['UI Design', 'Frontend Dev', 'Subgraph Dev']}
						link="/case-study/tellor"
						image={ImagePlaceholder}
					/>
        </div>
      </div>
    </Layout>
)

export default PortfolioPage
