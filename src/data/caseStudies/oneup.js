import PixelArcher from '../../images/characters/archer.png'
import PixelPaladin from '../../images/characters/paladin.png'
import PixelWarrior from '../../images/characters/warrior.png'
import videoSrc from '../../images/portfolio/oneup-videomock-medium.mp4'
import videoSmallSrc from '../../images/portfolio/oneup-videomock-small.mp4'
import headerImage from '../../images/portfolio/1up-displays-600.png'
import videoScreen from '../../images/portfolio/oneup-3Dscreen.png'

export default {
  id: 3,
  projectName: '1Up World',
  projectHeadline: 'web3 App Design',
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
    'Back-End Development',
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
      name: 'Sam',
      role: 'Development',
      image: PixelWarrior,
    },
    {
      name: 'Dekan',
      role: 'Development',
      image: PixelWarrior,
    },
    {
      name: 'Eric',
      role: 'Project Management',
      image: PixelPaladin,
    },
  ],
  productLink: 'https://1up.world/',
  codeLink: 'https://github.com/raid-guild/caletaXP-web',
  testimonial: null,
  link: '/case-studies/oneup',
}
