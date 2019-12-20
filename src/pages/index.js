import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

import HeroBackground from '../images/polkadots.png'

const IndexPage = () => (
  <Layout>
    <div className="Hero BackgroundImage" style={{backgroundImage: "url(" + HeroBackground + ")"}}>
      <div className="Hero__Contents">
        <h1>Get Brutal.</h1>
        <p>This is a brutal dapp.</p>
        <Link to="library">View Library</Link>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <div className="Row">
          <div className="Column Column--33">
            <h1>React</h1>
            <p>This is a react app.</p>
            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">Go to React Docs</a>
          </div>
          <div className="Column Column--33">
            <h1>Gatsby</h1>
            <p>Git triggered deployment.</p>
            <a href="https://www.gatsbyjs.org/docs/" target="_blank" rel="noopener noreferrer">Go to Gatsby Docs</a>
          </div>
          <div className="Column Column--33">
            <h1>Netlify</h1>
            <p>Git triggered deployment.</p>
            <a href="https://docs.netlify.com/" target="_blank" rel="noopener noreferrer">Go to Netlify Docs</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
