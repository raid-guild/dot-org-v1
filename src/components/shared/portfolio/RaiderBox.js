import React from 'react'

const RaiderBox = ({ raiderName, raiderRole, characterImage }) => (
  <div className="RaiderBox">
    <div>
      <div className="ImageBox">
        <img src={characterImage} alt="character type" />
      </div>
      <p>{raiderName}</p>
    </div>
    <div className="TextRight">
      <code className="tag">{raiderRole}</code>
    </div>
  </div>
)

export default RaiderBox
