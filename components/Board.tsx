import * as React from 'react'

// custom components
import Snake from './Snake'
import Food from './Food'

export default (props) => (
  <div className="game-board">
    <Snake snakeDots={props.snakeDots} />
    <Food dot={props.food} />

    <style jsx global>{`
      .game-board {
        position: relative;
        margin: 50px auto;
        width: 600px;
        height: 600px;
        border: 2px solid #000;
      }
    `}</style>
  </div>
)