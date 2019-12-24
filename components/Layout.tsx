import * as React from 'react'

// custom imports
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default (props) => (
  <>
    <Nav />
    {props.children}
    <Footer />
    <style jsx global>
      {`
        body {
          max-height: 100vh;
          overflow: hidden;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }

        a {
          color: #067df7;
          text-decoration: none;
          font-size: 14px;
          border-bottom: 1px solid transparent;
          transition: border-bottom 0.2s ease-in;
        }

        a:hover {
          border-bottom: 1px solid #067df7;
        }
      `}
    </style>
  </>
)
