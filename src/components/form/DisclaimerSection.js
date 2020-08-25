import React from 'react'

function DisclaimerSection() {
  return (
    <section
      className="disclaimer"
      id="0"
      style={{
        margin: 'auto',
        backgroundColor: '#ff3864',
      }}
    >
      <h1 style={{ fontSize: '25pt', margin: '20px', color: 'black' }}>
        Before you proceed
      </h1>
      <p
        style={{
          width: '70%',
          fontSize: '15pt',
          lineHeight: '1.3',
          color: 'white',
        }}
      >
        A RaidGuild submission require a 300 DAI tribute to set up a
        consultation, this entitles you to a one hour call with the Guild and a
        high level strategy document. These funds will contribute towards the
        final budget of your project.
      </p>
      <a href="#1">Agree</a>
    </section>
  )
}

export default DisclaimerSection
