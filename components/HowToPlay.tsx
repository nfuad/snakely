import * as React from 'react'

export default () => (
  <div className="how-to-play">
    <h3>How To Play</h3>
    <ul>
      <li>
        Press the <kbd>space bar</kbd> to pause/unpause
      </li>
      <li>
        Press <kbd>UP</kbd> Arrow key to move up
      </li>
      <li>
        Press <kbd>DOWN</kbd> Arrow key to move down
      </li>
      <li>
        Press <kbd>LEFT</kbd> Arrow key to move left
      </li>
      <li>
        Press <kbd>RIGHT</kbd> Arrow key to move right
      </li>
      <li>The snake can't bump into the boundaries</li>
      <li>The snake can't collapse into itself.</li>
    </ul>
  </div>
)
