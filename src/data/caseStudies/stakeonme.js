import PixelArcher from '../../images/characters/archer.png'
import PixelPaladin from '../../images/characters/paladin.png'
import PixelWarrior from '../../images/characters/warrior.png'
import PixelRanger from '../../images/characters/ranger.png'
import headerImage from '../../images/portfolio/stake-fullwidth.png'
import videoSrc from '../../images/stakeonme-videomock.mp4'


export default {
  id: 1,
  projectName: 'Stake On Me',
  projectHeadline:
    'Design and build the frontend for a personal token launcher built on the meToken contracts.',
  headerImage: headerImage,
  headerVideo: videoSrc,
  challengeText:
    'If you’ve ever seen an interface designed by a developer, then you know what we were looking at to start this raid. As the first deployed personal token interface, many assumptions were being made on possible use-cases, and refined direction for the MVP needed to be established.',
  approachText:
    'We started with an intentional UX Audit to explore and validate common use cases and interaction flows of personal tokens, as well as Guild tokens that are launched/owned by DAOs. With validated UX in hand, we split our efforts to simultaneously run the design tasks and setup of frontend.',
  solutionTexts: [
    'On a small(ish) budget and timeframe, we focused on maximizing user experience through design, and some fancy tech, to ship the MVP asap for testing with live users. We suggested standard default settings that users could select when launching their personal token, so they didn’t need to fully understand every detail about the economics.',
    'Though initially tasked with just ‘make frontend prettier’, we ended up coding a lot more than initially planned in order to meet our standards of user experience, such as better handling of transactions and lazy loading tokens. On the design side, we ended up adding a bit of copywriting and infographics to help tell the story to new users.',
  ],
  activitiesTexts: [
    'UX Audit',
    'Code Review',
    'UI Design',
    'Frontend Development',
    'Backend Development',
    'Copywriting',
    'Visual Design',
  ],
  deliverablesTexts: ['Full-featured Web3 App', 'UX Audit and prototype'],
  resultsText: ['We delivered a full-featured Web3 app.'],
  raiders: [
    {
      name: 'Ven',
      role: 'UX + Front-End',
      image: PixelRanger,
    },
    {
      name: 'Sam',
      role: 'Full-Stack Dev',
      image: PixelPaladin,
    },
    {
      name: 'Hammad',
      role: 'Front-End Dev',
      image: PixelWarrior,
    },
    {
      name: 'Darren',
      role: 'Design + Copy',
      image: PixelArcher,
    },
  ],
  productLink: 'https://stakeonme.com/',
  codeLink: null,
  testimonial: null,
  link: '/case-studies/stakeonme',
}
