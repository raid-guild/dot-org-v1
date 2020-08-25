import React from 'react'

const RaiderBox = ({ raiderName, raiderRole, characterImage }) => (
  <div className="RaiderBox">
    <div>
      <img src={characterImage} alt="character type" />
      <p>{raiderName}</p>
    </div>
    <div className="TextRight">
      <code className="tag">{raiderRole}</code>
    </div>
  </div>
)

export default RaiderBox
