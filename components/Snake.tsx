import React from 'react'

export default (props) => {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        }
        return (
          <div className="snake-dot" key={i} style={style}>
            <style jsx global>{`
              .snake-dot {
                position: absolute;
                width: 2%;
                height: 2%;
                background-color: #000;
                border: 1px solid #fff;
                z-index: 2;
              }
            `}</style>
          </div>
        )
      })}
    </div>
  )
}
