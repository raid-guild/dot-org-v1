import PixelArcher from '../../images/characters/archer.png'
import PixelPaladin from '../../images/characters/paladin.png'
import TellorDeviceMockup from '../../images/portfolio/tellor_device-mockup.png'
import headerImage from '../../images/portfolio/tellor-fullwidth.png'

export default {
  id: 2,
  projectName: 'Tellor',
  projectHeadline:
    'Design and build the Tellor Dispute Center, along with its Price Feed, for visual cohesion and to simplify both user and dev experience for ease of use and future maintainability.',
  headerImage: headerImage,
  challengeText:
    'The first iteration of the Tellor Dispute Center functioned okay, but had its fair share of bugs, usability flaws, and was built in a way that made it hard to maintain and improve quickly. On the design side, there wasn’t really a fleshed out style guide to work with, so some visual design would be necessary.',
  approachText:
    'We began the raid with a quick sprint to deeply understand the Tellor oracle system from a technical and brand level. With this understanding in place, we then ran simultaneous audits on the codebase and user experience. Through the process, we came up with many actionable directives to improve performance and usability of the Dispute Center and the Price Feed.',
  solutionTexts: [
    'On the tech side, we replaced raw contract calls by building a custom subgraph which enhanced both experiences of the developers maintaining the data, and users fetching the data.',
    'On the design side, we were able to greatly simplify the user experience through a combination of better information architecture and contextual micro-interactions. In the end, we expanded the Tellor visual language into a micro design system that works in light and dark mode, including a new custom loading animation to match.',
  ],
  activitiesTexts: [
    'UX Audit',
    'Code Review',
    'UI Design',
    'Frontend Development',
    'Backend Development',
  ],
  deliverablesTexts: [
    '2 Web3 Apps (Dispute Center, Price Feed)',
    'Micro Style Guide',
  ],
  resultsText: [
    'We delivered two Web3 applications. One for their Dispute Center and another for the Price Feed.',
  ],
  raiders: [
    {
      name: 'Ven',
      role: 'Design',
      image: PixelArcher,
    },
    {
      name: 'Sam',
      role: 'Full-Stack Dev',
      image: PixelPaladin,
    },
  ],
  productLink: 'https://disputes.tellorscan.com/',
  codeLink: 'https://github.com/tellor-io/tellorDisputeCenter',
  testimonial: {
    text: `"RaidGuild has been an amazing experience from start to finish, great guys in an awesome DAO and I'd highly recommend them for whatever the project"`,
    clientName: 'The Mandalore',
    orgName: 'Tellor.io',
  },
  link: '/case-studies/tellor',
}
