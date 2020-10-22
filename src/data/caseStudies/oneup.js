import PixelArcher from '../../images/characters/archer.png'
import PixelMonk from '../../images/characters/monk.png'
import PixelPaladin from '../../images/characters/paladin.png'
import PixelWarrior from '../../images/characters/warrior.png'
import videoSrc from '../../images/portfolio/oneup-videomock-medium.mp4'
import videoSmallSrc from '../../images/portfolio/oneup-videomock-small.mp4'
import headerImage from '../../images/portfolio/1up-displays-600.png'
import videoScreen from '../../images/portfolio/oneup-3Dscreen.png'

export default {
  id: 3,
  projectName: '1Up World',
  projectHeadline: '1UP World provides community tracking as an MMO coordination game. Giving a 1UP helps track value added activities within your community via a Discord or Telegram chat bot.',
  cardImage: videoSmallSrc,
  headerImage: headerImage,
  fullVideo: videoSrc,
  videoScreen: videoScreen,
  challengeText: 'For over a year, the MetaCartel community tracked internal contribution via a homemade web3 game called Pepper4D. The challenge of 1UP World was to upgrade the game into a format any community could use.',
  approachText: 'The team for this project would need both development and product design, which came from veteran web3 experts Sam, Dekan and Darren. The original creator of Pepper4D, Eric, would act as our Project Manager.',
  solutionTexts: ['The solution was to create a retro game-like interface which could be connected with any Discord or Telegram channel to provide a scoreboard of 1UPs. Using emojis or simple commands, any community member could recognize another by giving them a 1UP. Each month, players could claim their 1UPs as an on-chain currency through a DAO Stack DAO.'],
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
      image: PixelPaladin,
    },
    {
      name: 'Eric',
      role: 'Project Management',
      image: PixelMonk,
    },
  ],
  productLink: 'https://1up.world/',
  codeLink: 'https://github.com/raid-guild/caletaXP-web',
  testimonial: null,
  link: '/case-studies/oneup',
}
