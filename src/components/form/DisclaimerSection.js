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
        You need to submit a 100 DAI tribute to the DAO at the end to complete
        the consultation request. The tribute above goes to the DAO for the
        members time. These funds are used to improve the Guild and create free
        tooling and resources for the Ethereum community. Funding the DAO funds
        open-source and Ethereum Developement.
      </p>
      <a href="#1">Agree</a>
    </section>
  )
}

export default DisclaimerSection
