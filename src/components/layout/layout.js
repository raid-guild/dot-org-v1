import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../shared/header/header'
import Footer from '../shared/footer/footer'

import '../../styles/_globals.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'A Decentralized Collective of Mercenaries Ready to Slay Your Web3 Product Demons',
            },
            {
              name: 'keywords',
              content:
                'decentralized, ethereum, software development, dao, metacartel',
            },
            { property: 'og:title', content: 'Raid Guild' },
            { property: 'og:url', content: 'https://raidguild.org' },
            {
              property: 'og:image',
              content: 'https://raidguild.org/images/raidguild_org.png',
            },
            {
              property: 'og:description',
              content:
                'A Decentralized Collective of Mercenaries Ready to Slay Your Web3 Product Demons',
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:creator',
              content: 'Raid Guild',
            },
            {
              name: 'twitter:title',
              content: 'Raid Guild',
            },
            {
              name: 'twitter:description',
              content:
                'A Decentralized Collective of Mercenaries Ready to Slay Your Web3 Product Demons',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="Layout">{children}</div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
