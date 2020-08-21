import React from 'react'
import { Link } from 'gatsby'

const RaiderBox = ({ raiderName, raiderRole, characterImage }) =>
  <div className="RaiderBox">
		<div>
			<img src={characterImage} />
			<p>{raiderName}</p>
		</div>
		<div className="TextRight">
			<code className="tag">{raiderRole}</code>
		</div>
  </div>

export default RaiderBox;
