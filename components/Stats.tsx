import * as React from 'react'

// custom imports
import BestScore from './BestScore'

export default ({ points, paused }) => (
  <div>
    <h3>Stats</h3>
    <h4>Points: {points}</h4>
    <h4>Best Score: {<BestScore />}</h4>
    {paused && <h4>Paused</h4>}
  </div>
)
