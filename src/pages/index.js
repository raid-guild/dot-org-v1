import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

import DaohausLogo from '../images/projects/daohaus__logo--black.png'
import PokemolLogo from '../images/projects/pokemol__brand--standard.png'
import MetaCartelLogo from '../images/projects/meta_chill.png'
import MolochLogo from '../images/projects/moloch__logo--red.png'

const IndexPage = () => (
  <Layout>
    <div className="Hero Home BackgroundImage">
      <div className="Hero__Contents">
        <h1>Raid Guild</h1>
        <p>
          A dao for builders to form Raid Parties and team up on epic boss
          fights (open source web3 projects).
        </p>
        <Link to={`/lore`}>View Lore</Link>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <h2>RAID On!</h2>
        <p>
          We believe in Web3, and are here to build it, use it, propagate it.
        </p>
        <p>
          DAOs will power the future of work. Through the network of MetaCartel,
          the builders have united to form a decentralized agency; a working
          group of freelancers, bounty hunters and hired guns ready to slay your
          web3 product monsters.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>Full Stack Development</li>
          <li>Smart Contracts</li>
          <li>UX/UI Design</li>
          <li>Branding</li>
          <li>Visual Design</li>
          <li>Marketing</li>
          <li>Product</li>
          <li>Content</li>
          <li>Memes</li>
        </ul>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <h2>Project Partners</h2>
        <p>
          We're very new, but work with a variety of projects in the ecosystem.
        </p>
        <div className="ProjectLogos">
          <img src={DaohausLogo} />
          <img src={PokemolLogo} />
          <img src={MetaCartelLogo} />
          <img src={MolochLogo} />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
