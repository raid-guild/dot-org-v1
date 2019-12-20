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
        <h2>Brief Intro</h2>
        <p>
          We are a decentralized collective of web3 experts with a variety of
          skillsets needed to tackle most problems.
        </p>
        <ul>
          <li>Development</li>
          <li>Design</li>
          <li>Marketing</li>
          <li>Product</li>
          <li>Content</li>
        </ul>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <h2>Our Work</h2>
        <p>
          We're very new, but come from a variety or projects in the ecosystem.
        </p>
        <div className="ProjectLogos">
          <img src={DaohausLogo} />
          <img src={PokemolLogo} />
          <img src={MetaCartelLogo} />
          <img src={MolochLogo} />
        </div>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <div className="Row">
          <div className="Column Column--33">
            <h3>Raid Parties</h3>
            <p>
              A Raid Party is a small agile team built from members of the
              Guild. Raid Parties can be formed to tackle both internal and
              external projects.
            </p>
          </div>
          <div className="Column Column--33">
            <h3>External Projects</h3>
            <p>
              External projects can hire the Raid Guild to help them. External
              projects are taxed 10% which goes back to the Guild Bank. Funds in
              the Guild Bank can then be deployed to internal projects.
            </p>
          </div>
          <div className="Column Column--33">
            <h3>Internal Projects</h3>
            <p>
              Internal projects are our own ideas from the Guild. Can be funded
              directly by the Guild or an external funder.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <div className="Row">
          <div className="Column Column--33">
            <h3>Moloch</h3>
            <p>The Guild uses Moloch for its DAO.</p>
            <a
              href="https://github.com/MolochVentures/moloch"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
          <div className="Column Column--33">
            <h3>DAOHaus</h3>
            <p>Our dao was launched with Daohaus</p>
            <a
              href="https://daohaus.club/dao/0xbd6fa666fbb6fdeb4fc5eb36cdd5c87b069b24c1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Daohaus
            </a>
          </div>
          <div className="Column Column--33">
            <h3>Pokemol</h3>
            <p>
              Pokemol (Pocket Moloch) is used for submitting proposals and
              voting.
            </p>
            <a
              href="https://pokemol.com/dao/0xbd6fa666fbb6fdeb4fc5eb36cdd5c87b069b24c1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View our Pokemol
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
