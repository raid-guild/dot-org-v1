import React from 'react'
import Layout from '../components/layout/layout'
import ImagePlaceholder from '../images/image-placeholder.png'
import PortfolioCard from '../components/shared/portfolio/PortfolioCard'
import portfolioHeroBg from '../images/raid__valhalla.png'

const PortfolioPage = () => (
  <Layout>
    <div
      className="Hero BackgroundImage"
      name="portfolio"
      style={{ backgroundImage: 'url(' + portfolioHeroBg + ')' }}
    >
      <div className="Hero__Contents">
        <h1>Portfolio</h1>
        <p>Our Trophy Hall of Achievements from Past Raids</p>
      </div>
      <div className="HeroBorder" />
    </div>
    <div className="Column">
      <div className="Portfolio__Cards">
        <PortfolioCard
          projectName="Tellor"
          projectTags={['Design', 'Full-Stack Dev']}
          link="/case-studies/tellor"
          image={ImagePlaceholder}
        />
        <PortfolioCard
          projectName="SBV"
          projectTags={['UX/UI', 'Design', 'DAO Consult']}
          link="/case-studies/sbv"
          image={ImagePlaceholder}
        />
        <PortfolioCard
          projectName="1UP World"
          projectTags={['UX/UI', 'Design', 'Full-stack Dev']}
          link="/case-studies/oneup"
          image={ImagePlaceholder}
        />
        <PortfolioCard
          projectName="Stake on Me"
          projectTags={['UI/UX', 'Copywriting', 'Full-stack Dev']}
          link="/case-studies/stakeonme"
          image={ImagePlaceholder}
        />
        <PortfolioCard
          projectName="Wrapeth"
          projectTags={['UI/UX', 'Visual Design', 'Full-stack Dev']}
          link="/case-studies/wrapeth"
          image={ImagePlaceholder}
        />
        <PortfolioCard
          projectName="Aragon"
          projectTags={['UI Design', 'Frontend Dev', 'Subgraph Dev']}
          link="/case-studies/aragon"
          image={ImagePlaceholder}
        />
{/*         <PortfolioCard
          projectName="Minion"
          projectTags={['UX/UI', 'Code Audit', 'Full-stack Dev']}
          link="/case-studies/minion"
          image={ImagePlaceholder}
        /> */}
      </div>
    </div>
  </Layout>
)

export default PortfolioPage
