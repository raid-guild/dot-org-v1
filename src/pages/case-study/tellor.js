import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout/layout'


import IconHelm from '../../components/shared/icons/IconHelm'
import IconAxes from '../../components/shared/icons/IconAxes'
import IconCrown from '../../components/shared/icons/IconCrown'
import IconMagic from '../../components/shared/icons/IconMagic'

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
    </Layout>
)

export default TellorCaseStudyPage
