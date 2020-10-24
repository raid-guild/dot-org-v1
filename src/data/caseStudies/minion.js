import PixelWizard from '../../images/characters/paladin.png'
import PixelWarrior from '../../images/characters/warrior.png'
import videoSrc from '../../images/portfolio/minion-videomock-medium.mp4'
import videoSmallSrc from '../../images/portfolio/minion-videomock-small.mp4'
import headerImage from '../../images/portfolio/minion-displays-600.png'
import videoScreen from '../../images/portfolio/minion-3Dscreen.png'

export default {
  id: 3,
  projectName: 'Moloch Minion',
  projectHeadline: 'Moloch DAOs needed a way to execute arbitrary contract calls through a passing proposal. To do this we did a RaidGuild Improvement Proposal (RIP) to explore a proof of concept for new contracts and getting a minimal frontend UI to test inside the RaidGuild DAO.',
  cardImage: videoSmallSrc,
  videoScreen: videoScreen,
  headerImage: headerImage,
  fullVideo: videoSrc,
  challengeText: 'Moloch V1 and V2 contracts do not have the functionality to do arbitrary contract calls so other solutions had to be explored. Because the core Moloch contracts have been audited we wanted to look into a contract extension pattern. Using this we could keep the new code isolated from the core contract and test this proof of concept.',
  approachText: 'We began the RIP with a kickoff meeting with a few interested raiders to explore the feasibility. 3 guilders joined the call, after a quick discussion we decided it would be possible and made a small proposal of about 1500DAI to the RaidGuild dao. These funds were so we could pursue our possible solutions. The proposal passed so we mapped out the next steps doing a UI first approach. This gave us a list of requirements for the new Moloch contract extension. Then in parallel we were able to begin contract dev and UI dev.',
  solutionTexts: [
    'We created a Moloch contract extension and dubbed it the Minion. The contract worked by storing a function call and linking it to a proposal. Only after the proposal voting period had finished and passed we would allow the transaction to be executed. For the front end we decided to try using VUE, more for a chance to get some more experience with a library beisdes React. The fact that this was only an extension to the base Moloch contract allows the contract to be easily tweaked and composable with any current MolochV2.',
    'The initial POC was a great success with many projects besides RaidGuild adopting and experimenting the new pattern. It has spurred other usecases, such as DAO owned ENS domain, NFT and erc20 vaults, forged Minion tools (minions with a specific use), and many others.',
  ],
  activitiesTexts: [
    'Solidity Development',
    'UI Design',
    'Front-End Development',
    'Use Case Exploration',
  ],
  deliverablesTexts: ['Web3App'],
  resultsText: null,
  raiders: [
    {
      name: 'Dekan',
      role: 'Lead Frontend Dev',
      image: PixelWarrior,
    },
    {
      name: 'Wolflo',
      role: 'Solidity',
      image: PixelWizard,
    },
    {
      name: 'ProofOfTom',
      role: 'Frontend Dev',
      image: PixelWarrior,
    },
  ],
  productLink: 'https://minion.raidguild.org/',
  codeLink: 'https://github.com/raid-guild/moloch-minion',
  testimonial: null,
  link: '/case-studies/minion',
}
