import * as React from 'react'

export default (props) => (
  <div className="food">
    <style jsx global>
      {`
        .food {
          position: absolute;
          width: 2%;
          height: 2%;
          background: red;
          border: 1px solid #fff;
          z-index: 1;
          left: ${props.dot[0]}%;
          top: ${props.dot[1]}%;
        }
      `}
    </style>
  </div>
)
