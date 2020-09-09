import PixelArcher from '../../images/characters/archer.png'
import PixelPaladin from '../../images/characters/paladin.png'
import PixelWarrior from '../../images/characters/warrior.png'

export default {
  id: 3,
  projectName: 'WrapETH',
  projectHeadline:
    'Design and build a simple, fun interface for wrapping and unwrapping Eth.',
  headerImage: null,
  challengeText:
    'DAOs, especially Moloch DAOs, use the hell out of wrapped Eth (wETH). Wrapping ETH into wETH converts it into a standard ERC-20 token that is cheaper to transact with and generally easier to work with across many smart contract interactions. There was no central interface to interact with and lots of folks were just using Etherscan :/. Some were even using Uniswap for its interface, which requires a trading fee.',
  approachText:
    'The wrapped Eth contract is very simple, and very easy for us to spin up a simple frontend for it. We didn’t just want another dev-friendly interface though, so we passed a little design love throughout the interface also. Guilders believe we should Make Apps Fun Again plz ;)',
  solutionTexts: [
    'Built and shipped as a free tool for the Ethereum community, especially its DAO members, Wrapeth is a no fees, no frills ETH wrapper. The name ‘Wrapeth’ is search-engine optimized for the standard question we received hundreds of times in chat rooms, “How do I wrap eth?” while also being a little play on words like Giveth. Now shipped, we are looking to abstract the interface into a microservice that can be utilized by other apps.',
  ],
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
      name: 'Lili',
      role: 'Design',
      image: PixelArcher,
    },
    {
      name: 'Ven',
      role: 'UX + Front-End',
      image: PixelWarrior,
    },
    {
      name: 'Dekan',
      role: 'Back-End Dev',
      image: PixelPaladin,
    },
  ],
  productLink: 'https://wrapeth.com/',
  codeLink: 'https://github.com/raid-guild/wethwrapper-web',
  testimonial: null,
  link: '/case-studies/wrapeth',
}
