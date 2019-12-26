import * as React from 'react'

export default ({ dot }) => (
  <div className="food">
    <style jsx global>
      {`
        .food {
          position: absolute;
          width: 2%;
          height: 2%;
          background: tomato;
          border-radius: 30%;
          border: 1px solid #fff;
          z-index: 1;
          left: ${dot[0]}%;
          top: ${dot[1]}%;
        }
      `}
    </style>
  </div>
)
