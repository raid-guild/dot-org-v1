import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

import RaidTeeImg from '../images/raid__fantasy--tee-technicolor.png'
import DaohausLogo from '../images/projects/daohaus__logo--white.png'
import PokemolLogo from '../images/projects/pokemol__brand--invert.png'
import MetaCartelLogo from '../images/projects/meta_chill.png'
import MolochLogo from '../images/projects/moloch__logo--red.png'

import IconHelm from '../components/shared/icons/IconHelm'
import IconAxes from '../components/shared/icons/IconAxes'
import IconCrown from '../components/shared/icons/IconCrown'
import IconMagic from '../components/shared/icons/IconMagic'

import PortfolioCard from '../components/shared/PortfolioCard'

const PortfolioPage = () => (
	<Layout>
      <div className="Hero Portfolio BackgroundImage" name="portfolio">
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
      <div className="Block Portfolio">
        <div className="Block__Contents">
          <div className="Portfolio__Cards">
            <div className="Row1">
			        <PortfolioCard
								projectName="Cool Project"
								projectTags={['Tag1', 'Tag2']}
								link="/case-studies/tellor"
								image={DaohausLogo}
							/>
							<PortfolioCard
								projectName="Boring Project"
								projectTags={['Boring']}
								link="/case-studies/tellor"
								image={MolochLogo}
							/>
          	</div>
          </div>
        </div>
      </div>
    </Layout>
)

export default PortfolioPage
