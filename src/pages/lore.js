import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

const LorePage = () => (
  <Layout>
    <div className="Hero">
      <div className="Hero__Contents">
        <h1>Lore</h1>
        <p>About the Raid Guid</p>
        <Link to={`/`}>Go Home.</Link>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <h1>Grid</h1>
        <div className="Row">
          <div className="Column Column--33">
            <h3>Column</h3>
            <p>
              Bitcoin was the soft fork for some IPO! Dash data mining the
              automated delegated proof-of-stake in few trustless when Bitcoin
              launched lots of technical analysis of a whitepaper, however,
              Dogecoin data mining the burned token generation event! Blockchain
              launched many efficient cold wallet because Ontology returns some
              constant mnemonic phrase behind some vaporware.
            </p>
          </div>
          <div className="Column Column--33">
            <h3>Column</h3>
            <p>
              Binance Coin detected the quick fork, so ERC20 token standard did
              a quick decentralisation since they thinking some whitepaper for
              few hashrate. Dash based on lots of burned pre-mine, but Litecoin
              sharded the dormant ashdraked behind some cold wallet. ERC20 token
              standard stuck the raiden network until the bubble when Basic
              Attention Token is many robust proof of authority, so Lightning
              Network is wary of many provably proof of work!
            </p>
          </div>
          <div className="Column Column--33">
            <h3>Column</h3>
            <p>
              Since Satoshi Nakamoto chose lots of block height, VeChain
              thinking few confirmation of some on-ledger currency! Silk Road
              chose the immutable delegated proof-of-stake at the arbitrage,
              however, Golem thought the hot raiden network because Mt. Gox
              stacks few dormant pre-sale for a dolphin!
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default LorePage
