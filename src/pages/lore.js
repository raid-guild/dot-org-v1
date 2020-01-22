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
        <h3>Raid Parties</h3>
        <p>
          A Raid Party is a small agile team built from members of the Guild.
          Raid Parties can be formed to tackle both internal and external
          projects.
        </p>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <h3>External Projects</h3>
        <p>
          External projects can hire the Raid Guild to help them. External
          projects are taxed 10% which goes back to the Guild Bank. Funds in the
          Guild Bank can then be deployed to internal projects.
        </p>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <h3>Internal Projects</h3>
        <p>
          Internal projects are our own ideas from the Guild. Can be funded
          directly by the Guild or an external funder.
        </p>
      </div>
    </div>
  </Layout>
)

export default LorePage
