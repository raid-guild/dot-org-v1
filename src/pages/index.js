import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

import RaidTeeImg from '../images/raid__fantasy--tee-technicolor.png'
import DaohausLogo from '../images/projects/daohaus__logo--white.png'
import PokemolLogo from '../images/projects/pokemol__brand--invert.png'
import MetaCartelLogo from '../images/projects/meta_chill.png'
import MolochLogo from '../images/projects/moloch__logo--red.png'
import DragonQuestBanner from 'https://raidguild.org/images/dragonquest-sponsor-03.png'

import IconHelm from '../components/shared/icons/IconHelm'
import IconAxes from '../components/shared/icons/IconAxes'
import IconCrown from '../components/shared/icons/IconCrown'
import IconMagic from '../components/shared/icons/IconMagic'

const IndexPage = () => (
  <Layout>
    <div className="Hero Home BackgroundImage" name="home">
      <div className="Hero__Contents">
        <p>
          A Decentralized Collective of Mercenaries Ready to Slay Your Web3
          Product Demons
        </p>
        <div className="ButtonGroup">
          <Link className="Button Filled" to="/hire">
            Hire Us
          </Link>
          <Link className="Button" to="/join">
            Join Us
          </Link>
        </div>
      </div>
      <div className="HeroBorder" />
    </div>
    <div className="Block Manifesto">
      <div className="Block__Contents" name="manifesto">
        <div className="Grid">
          <div
            className="Column Column--50"
            style={{ justifyContent: 'center' }}
          >
            <img src={RaidTeeImg} style={{ maxWidth: '400px' }} />
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
              "If you want to go fast, go alone.
              <br />
              If you want to go far, go together."
            </p>
          </div>
          <div className="Column FlexCenter">
            <a
              href="https://explorer.bounties.network/explorer?bounty_stage=active&platform=bounties-network&search=raid%20guild%20dragon%20quest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="dragon_quest"
                src={DragonQuestBanner}
                alt="dragon_quest"
                style={{ width: '100%', maxWidth: '600px' }}
              />
            </a>
            <a
              className="Button"
              href="https://hackathon.metacartel.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enter the Dragon
            </a>
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
            <Link className="Button" to="/hire">
              Hire Us
            </Link>
          </div>

          <div className="Column Column--50">
            <div className="ServiceCards">
              <div className="ServiceCards__Item">
                <IconHelm />
                <h3>Consultations</h3>
                <p>
                  Validate your ideas and get expert advice on how to build,
                  ship and grow your product.
                </p>
              </div>
              <div className="ServiceCards__Item">
                <IconCrown />
                <h3>Design Sprints</h3>
                <p>
                  Fine tune your product market fit and nail your UX before
                  writing a single line of code.
                </p>
              </div>
              <div className="ServiceCards__Item">
                <IconAxes />
                <h3>Full Stack Dev</h3>
                <p>
                  Make your dApp ideas a reality. From contracts to front ends,
                  our Raiders are the best in the biz.
                </p>
              </div>
              <div className="ServiceCards__Item">
                <IconMagic />
                <h3>Marketing</h3>
                <p>
                  Level up your meme game and build a compelling narrative for
                  your brand / product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Block Join">
      <div className="Block__Contents" name="join">
        <div className="Contain600">
          <h2>Join the Guild</h2>
          <p>
            We believe workers should be self-sovereign and able to work when,
            where and how they want, as long as they create high value output.
            We’re looking for top talent that can take things into their own
            hands and bring unique value to the guild.{' '}
          </p>
          <Link className="Button" to="/join">
            Join Us
          </Link>
        </div>
        <div className="Grid">
          <div className="Column Column--33">
            <IconHelm />
            <h4>Learn new things</h4>
            <p>
              Stay on top of the latest trends and developments while leveling
              up your skills.
            </p>
          </div>
          <div className="Column Column--33">
            <IconAxes />
            <h4>Cartel Culture</h4>
            <p>
              We're serious about our work and its impacts on society, but we
              also know how to have a good time.
            </p>
          </div>
          <div className="Column Column--33">
            <IconCrown />
            <h4>Tip of the Spear</h4>
            <p>
              Join the ranks on the front lines and make a direct impact on the
              world around you.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="Block Portfolio">
      <div className="Block__Contents">
        <h1>Projects</h1>
        <div className="Portfolio__Images">
          <div className="Row1">
            <img src={MetaCartelLogo} />
            <img src={MolochLogo} />
          </div>
          <div className="Row2">
            <img src={DaohausLogo} />
            <img src={PokemolLogo} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
