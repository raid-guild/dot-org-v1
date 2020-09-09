import PixelArcher from '../../images/characters/archer.png'
import PixelPaladin from '../../images/characters/paladin.png'
import PixelWarrior from '../../images/characters/warrior.png'
import PixelRanger from '../../images/characters/ranger.png'
import videoSrc from '../../images/design-scroll.mp4'
import headerImage from '../../images/portfolio/aragon-fullwidth.png'

export default {
  id: 0,
  projectName: 'Aragon Metrics Dashboard',
  projectHeadline:
    'The Aragon Network is a digital jurisdiction that offers services to DAOs. It does so via linked protocols like Aragon Court with ANJ. All these linked protocols have their tokens linked to ANT — the native token of the Aragon Network. The Metrics Dashboard is a project for providing insight to data regarding the ANT and ANJ tokens.',
  headerImage: headerImage,
  headerVideo: videoSrc,
  challengeText:
    'The initial challenege was deciding what information we wanted to visualize and how to best visualize it. Once that was decided, we realized that a majority of the visualizations would be time series charts. While it’s relatively simple to receive the current state of the blockchain with a single query, it’d take many tens of queries to get time series data with JSON-RPC, it quickly became obvious that we needed a caching solution to make this viable.',
  approachText:
    'With a clear set separation of concerns (design, frontend, and subgraph), each raider was able to mainly focus solely on their specialty, allowing for quick and concurrent development. Once the design was implemented, the subgraph was ready and there was exceptional cooperation to get the subgraph data into the frontend charts - like fitting two pieces of a puzzle together. We then went through an extensive QA to smooth out any rough edges.',
  solutionTexts: [
    'On the tech side, we replaced raw contract calls by building a custom subgraph which enhanced both experiences of the developers maintaining the data, and users fetching the data.',
    'On the design side, we were able to make the charts especially easy on the eyes while providing useful, readable information.',
  ],
  activitiesTexts: [
    'UI Design',
    'Frontend Development',
    'Subgraph Development',
  ],
  deliverablesTexts: ['Single Page Stats Dashboard'],
  resultsText: null,
  raiders: [
    {
      name: 'Darren',
      role: 'Design',
      image: PixelArcher,
    },
    {
      name: 'Saimano',
      role: 'Front-End Dev',
      image: PixelWarrior,
    },
    {
      name: 'ukstv',
      role: 'Graph Back-End Dev',
      image: PixelPaladin,
    },
    {
      name: 'proofoftom',
      role: 'Project Lead',
      image: PixelRanger,
      // Image needs update once we have a monk
    },
  ],
  productLink: 'https://stats.aragon.network/',
  codeLink: 'https://github.com/raid-guild/araboard',
  testimonial: null,
  link: '/case-studies/aragon',
}
