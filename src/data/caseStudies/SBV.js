import PixelArcher from '../../images/characters/archer.png'
import PixelPaladin from '../../images/characters/paladin.png'
import PixelWarrior from '../../images/characters/warrior.png'
import videoSrc from '../../images/portfolio/sbv-videomock-medium.mp4'
import videoSmallSrc from '../../images/portfolio/sbv-videomock-small.mp4'
import headerImage from '../../images/portfolio/1up-displays-600.png'
import videoScreen from '../../images/portfolio/sbv-3Dscreen.png'

export default {
  id: 3,
  projectName: 'Senary Blockchain Ventures',
  projectHeadline: 'SBV Landing Page Design',
  cardImage: videoSmallSrc,
  headerImage: headerImage,
  fullVideo: videoSrc,
  videoScreen: videoScreen,
  challengeText: '...',
  approachText: '...',
  solutionTexts: ['...'],
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
      image: PixelPaladin,
    },
  ],
  productLink: 'https://senaryblockchain.ventures/',
  codeLink: 'https://github.com/DarrenRM/sbv-site',
  testimonial: null,
  link: '/case-studies/sbv',
}
