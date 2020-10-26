import PixelArcher from '../../images/characters/archer.png'
import PixelWarrior from '../../images/characters/warrior.png'
import PixelMonk from '../../images/characters/monk.png'
import videoSrc from '../../images/portfolio/sbv-videomock-medium.mp4'
import videoSmallSrc from '../../images/portfolio/sbv-videomock-small.mp4'
import headerImage from '../../images/portfolio/sbv-displays-600.png'
import videoScreen from '../../images/portfolio/sbv-3Dscreen.png'

export default {
  id: 3,
  projectName: 'Senary Blockchain Ventures',
  projectHeadline: 'SBV is a multidisciplinary innovation firm devoted to decentralized technology. SBV supports web-based public utilities that democratize opportunity and promote greater humanity.',
  cardImage: videoSmallSrc,
  headerImage: headerImage,
  fullVideo: videoSrc,
  videoScreen: videoScreen,
  challengeText: 'SBV approached Raid Guild seeking guidance on the structure of their new DAO. The challenge was to determine which DAO structure best aligned with the features they wished to include. Additionally, SBV had no prior branding or website and would need Raid Guild to handle that as well.',
  approachText: 'The team consisted of two members. Burrrata, who has significant experience with both Moloch and Aragon DAOs, would consult with the team to determine the DAO structure. Darren, who has been designing within the crypto space since 2015, would work with the team to develop a quick brand and landing page. ',
  solutionTexts: ['The final solution delivered branding, design patterns and a landing page along with a report guiding the structure of the final DAO. SBV is currently working with The LAO to finalize the details of their decentralized organization.'],
  activitiesTexts: [
    'UX/UI Design',
    'Visual Design',
    'UI Design',
    'Front-End Development',
  ],
  deliverablesTexts: ['Web3App'],
  resultsText: null,
  raiders: [
    {
      name: 'Darren',
      role: 'Design',
      image: PixelArcher,
    },
    {
      name: 'Darren',
      role: 'Front-End',
      image: PixelWarrior,
    },
    {
      name: 'Burrrata',
      role: 'Project Management',
      image: PixelMonk,
    },
  ],
  productLink: 'https://senaryblockchain.ventures/',
  codeLink: 'https://github.com/DarrenRM/sbv-site',
  testimonial: null,
  link: '/case-studies/sbv',
}
