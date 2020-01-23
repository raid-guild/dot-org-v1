import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'

import Layout from '../components/layout/layout'

const ContactPage = () => {
  let hireEmbed = React.createRef()
  let joinEmbed = React.createRef()

  const openHireForm = () => {
    hireEmbed.typeform.open()
  }

  const openJoinForm = () => {
    joinEmbed.typeform.open()
  }

  return (
    <>
      <Layout>
        <div className="Hero">
          <div className="Hero__Contents OverEmbed">
            <h1>Contact Raid Guild</h1>

            <button
              className="btn"
              onClick={openHireForm}
              style={{ cursor: 'pointer' }}
            >
              Hire Us
            </button>

            <button
              className="btn"
              onClick={openJoinForm}
              style={{ cursor: 'pointer' }}
            >
              Join Us
            </button>
          </div>
        </div>
      </Layout>

      <ReactTypeformEmbed
        popup
        autoOpen={false}
        url="https://cooperturley381314.typeform.com/to/Bz5lWV"
        hideHeaders
        hideFooter
        buttonText="Go!"
        style={{ top: 100 }}
        ref={tf => {
          hireEmbed = tf
        }}
      />

      <ReactTypeformEmbed
        popup
        autoOpen={false}
        url="https://demo.typeform.com/to/njdbt5"
        hideHeaders
        hideFooter
        buttonText="Go!"
        style={{ top: 100 }}
        ref={tf => {
          joinEmbed = tf
        }}
      />
    </>
  )
}

export default ContactPage
