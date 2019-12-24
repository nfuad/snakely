import * as React from 'react'

// custom components
import Snake from './Snake'
import Food from './Food'

export default ({ data }) => (
  <div className="paper game-board">
    <Snake snakeDots={data.snakeDots} />
    <Food dot={data.food} />

    <style jsx global>{`
      .game-board {
        position: relative;
        margin: 50px auto;
        width: 30vw;
        height: 30vw;
      }
    `}</style>
  </div>
)
