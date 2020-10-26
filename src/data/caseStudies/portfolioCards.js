import AragonCaseStudyData from '../../data/caseStudies/aragon.js'
import StakeOnMeCaseStudyData from '../../data/caseStudies/stakeonme.js'
import TellorCaseStudyData from '../../data/caseStudies/tellor.js'
import OneUpCaseStudyData from '../../data/caseStudies/oneup.js'
import SBVCaseStudyData from '../../data/caseStudies/SBV.js'
import MinionCaseStudyData from '../../data/caseStudies/minion.js'

// pull case studies for portfolio cards
export const portfolioCards = [
  {
    id: 1,
    caseStudy: AragonCaseStudyData,
    tags: ['UX/UI', 'Frontend'],
  },
  {
    id: 2,
    caseStudy: StakeOnMeCaseStudyData,
    tags: ['UX/UI', 'Frontend'],
  },
  {
    id: 3,
    caseStudy: TellorCaseStudyData,
    tags: ['UX/UI', 'Backend', 'Frontend'],
  },
  {
    id: 4,
    caseStudy: OneUpCaseStudyData,
    tags: ['UX/UI', 'Frontend', 'Backend'],
  },
  {
    id: 5,
    caseStudy: MinionCaseStudyData,
    tags: ['Solidity', 'Backend', 'Frontend'],
  },
  {
    id: 6,
    caseStudy: SBVCaseStudyData,
    tags: ['UX/UI', 'Frontend'],
  },
]
