import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import portfolioHeroBg from '../images/raid__valhalla.png'
import { portfolioCards } from '../data/caseStudies/portfolioCards'

const PortfolioPage = () => {
  const renderPortfolio = () => {
    return (
      <div className="Portfolio__Cards">
        {portfolioCards.map(card => {
          return (
            <Link
              to={card.caseStudy.link}
              className="Portfolio__Card"
              key={card.id}
            >
              <div className="Portfolio__CardThumbnail">
                <video autoPlay muted loop>
                  <source src={card.caseStudy.cardImage} type="video/mp4" />
                  "Your browser does not support the video tag."
                </video>
              </div>
              <div className="Portfolio_CardContent">
                <h6>{card.caseStudy.projectName}</h6>
                <div className="Portfolio_CardTags">
                  {card.tags.map(tag => (
                    <span>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
            // <PortfolioCard
            //   key={card.id}
            //   projectName={card.caseStudyData.projectName}
            //   projectTags={card.tags}
            //   link={card.caseStudyData.link}
            //   image={card.caseStudyData.cardImage}
            // />
          )
        })}
      </div>
    )
  }
  return (
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
      <div className="Column">{renderPortfolio()}</div>
    </Layout>
  )
}

export default PortfolioPage
