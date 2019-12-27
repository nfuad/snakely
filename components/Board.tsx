import * as React from 'react'

// custom components
import Snake from './Snake'
import Food from './Food'
import Stats from './Stats'

export default ({ data }) => (
  <>
    <div className="paper game-board">
      <Snake snakeDots={data.snakeDots} />
      <Food dot={data.food} />
    </div>

    <Stats points={data.points} paused={data.paused} />

    <style jsx global>{`
      .game-board {
        position: relative;
        margin: 50px 0;
        width: 30vw;
        height: 30vw;
      }
    `}</style>
  </>
)
