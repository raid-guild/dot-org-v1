import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

import RaidTeeImg from '../images/raid__fantasy--tee.png'

import DaohausLogo from '../images/projects/daohaus__logo--black.png'
import PokemolLogo from '../images/projects/pokemol__brand--standard.png'
import MetaCartelLogo from '../images/projects/meta_chill.png'
import MolochLogo from '../images/projects/moloch__logo--red.png'

const IndexPage = () => (
  <Layout>
    <div className="Hero Home BackgroundImage">
      <div className="Hero__Contents">
        <p>
          A Decentralized Collective of Mercenaries Ready to Slay Your Web3
          Product Demons
        </p>
        <div className="ButtonGroup">
          <a
            className="Button Filled"
            href="https://raidguild.typeform.com/to/t6Mumf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Us
          </a>
          <a
            className="Button"
            href="https://raidguild.typeform.com/to/c0LjXo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Us
          </a>
        </div>
      </div>
      <div className="HeroBorder" />
    </div>
    <div className="Block Manifesto">
      <div className="Block__Contents" name="manifesto">
        <div className="Grid">
          <div className="Column Column--50">
            <img src={RaidTeeImg} />
          </div>

          <div className="Column Column--50">
            <h2>Manifesto</h2>
            <p>
              We believe that DAOs will power the future of work. Through the
              MetaCartel network, we assembled a fellowship of the best
              builders, designers and hustlers in the space in order to make
              this future a reality. By sharing resources, branding and
              collaboration tools, we can create positive-sum value for the
              Ethereum ecosystem in a way that has never been possible before
              the advent of DAOs.
            </p>
            <p>
              We believe in Web3 and are here to build it, use it, and propogate
              it. The profits from our work will be used to fund development of
              open source tooling and public goods. We will share the learnings
              from our experiments and open source our processes for the
              community to learn and build from.
            </p>
            <p className="Quote">
              "If you want to go fast, go alone. If you want to go far, go
              together."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="Block Hire">
      <div className="Block__Contents" name="services">
        <div className="Grid">
          <div className="Column Column--50">
            <h2>Our Services</h2>
            <p>
              RaidGuild is the premier design and dev agency of the Web3
              ecosystem. We are deeply entrenched in the bleeding edge of DAOs,
              DeFi, dApps and everything else in between. Hailing from the
              MetaCartel network, our team consists of a diverse group of talent
              with over 9000 years of combined experience.
            </p>
            <p>
              We know how to buidl and have the connections, talent and
              experience to turn your ideas into reality. We are lean to the
              core and deliver high quality results with quick turnarounds.
            </p>
            <a
              className="Button"
              href="https://raidguild.typeform.com/to/t6Mumf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Us
            </a>
          </div>

          <div className="Column Column--50"></div>
        </div>
      </div>
    </div>
    <div className="Block Join">
      <div className="Block__Contents" name="join">
        <h2>Join the Guild</h2>
        <p>
          We believe workers should be self-sovereign and able to work when,
          where and how they want, as long as they create high value output.
          We’re looking for top talent that can take things into their own hands
          and bring unique value to the guild.{' '}
        </p>
        <a
          className="Button"
          href="https://raidguild.typeform.com/to/c0LjXo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Us
        </a>
        <div className="Grid">
          <div className="Column Column--33">
            <h4>Learn new things</h4>
            <p>
              Stay on top of the latest trends and developments while leveling
              up your skills.
            </p>
          </div>
          <div className="Column Column--33">
            <h4>Cartel Culture</h4>
            <p>
              Some stuff about how dope everyone is and the awesome culture and
              feeling of community.
            </p>
          </div>
          <div className="Column Column--33">
            <h4>Change The World</h4>
            <p>
              This is the most exciting space to be working in. Join the ranks
              on the front lines and make an impact.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="Block Portfolio">
      <div className="Block__Contents">
        <h1>Projects</h1>
        <div className="Portfolio__Images">
          <img src={MetaCartelLogo} />
          <img src={MolochLogo} />
          <img src={DaohausLogo} />
          <img src={PokemolLogo} />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
