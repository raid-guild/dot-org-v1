import React from 'react'

import Layout from '../../../components/layout/layout'
import IconAxes from '../icons/IconAxes'
import IconMagic from '../icons/IconMagic'
import IconArrow from '../icons/IconArrow'
import IconRaidGuild from '../../../images/raidguild__icon.png'
import RaiderBox from './RaiderBox'

const CaseStudyPage = ({ caseStudy }) => (
  <Layout>
    <div className="CaseStudy">
      <div className="Hero" name="portfolio">
        <div className="Hero__Contents Grid">
          <div className="Column Column--50">
            <h2>{caseStudy.projectName}</h2>
            <p>{caseStudy.projectHeadline}</p>
          </div>
          <div className="Column Column--50">
            <img src={caseStudy.headerImage} alt="case study header" />
          </div>
        </div>
        <div className="HeroBorder" />
      </div>
      <div className="Block">
        <div className="Block__Contents">
          <div className="Grid">
            <div className="Column Column--50">
              <h3>The Challenge</h3>
              <p>{caseStudy.challengeText}</p>
            </div>
            <div className="Column Column--50">
              <h5>Raiders</h5>
              {caseStudy.raiders.map(raider => (
                <RaiderBox
                  key={raider.name}
                  raiderName={raider.name}
                  raiderRole={raider.role}
                  characterImage={raider.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="Block PrimaryBG">
        <div className="Block__Contents Contain800">
          <h2 className="IconHeader">
            <IconAxes />
            Our Approach
          </h2>
          <p>{caseStudy.approachText}</p>
        </div>
      </div>
      {caseStudy.videoScreen ? (
        <div
          className="Block BgImage"
          style={{ backgroundImage: 'url(' + caseStudy.videoScreen + ')' }}
        ></div>
      ) : null}
      <div className="Block">
        <div className="Block__Contents">
          <div className="Contain800">
            <h2 className="IconHeader">
              <img src={IconRaidGuild} alt="Raid Guild" />
              Our Solution
            </h2>
            {caseStudy.solutionTexts.map(solutionText => (
              <p key={solutionText}>{solutionText}</p>
            ))}
          </div>
          <div className="SectionSeparator">
            <hr />
          </div>
          <div className="Grid">
            <div className="CaseStudy__List Column Column--50">
              <h4>Activities</h4>
              {caseStudy.activitiesTexts.map(activitiesText => (
                <span key={activitiesText}>{activitiesText}</span>
              ))}
            </div>
            <div className="CaseStudy__List Column Column--50">
              <h4>Deliverables</h4>
              {caseStudy.deliverablesTexts.map(deliverablesText => (
                <span key={deliverablesText}>{deliverablesText}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {caseStudy.fullVideo ? (
        <div className="Block Video">
          <video autoPlay muted loop>
            <source src={caseStudy.fullVideo} type="video/mp4" />
            "Your browser does not support the video tag."
          </video>
        </div>
      ) : null}
      <div className="Block Results SecondaryBG">
        <div className="Block__Contents Contain800">
          <h2 className="IconHeader">
            <IconMagic /> Results
          </h2>
          <p>{caseStudy.resultsText}</p>
          <div className="ButtonGroup">
            {caseStudy.codeLink && (
              <a
                href={caseStudy.codeLink}
                className="Button"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Codebase <IconArrow />
              </a>
            )}
            <a
              href={caseStudy.productLink}
              className="Button"
              rel="noopener noreferrer"
              target="_blank"
            >
              View Final Product <IconArrow />
            </a>
          </div>
        </div>
      </div>
      {caseStudy.testimonial && (
        <div className="Block">
          <div className="Block__Contents Contain TextCenter">
            <h2 className="Secondary">Client Testimonial</h2>
            <p>{caseStudy.testimonial.text}</p>
            <code className="tag">
              {' '}
              - {caseStudy.testimonial.clientName},{' '}
              {caseStudy.testimonial.orgName}{' '}
            </code>
          </div>
        </div>
      )}
    </div>
  </Layout>
)

export default CaseStudyPage
