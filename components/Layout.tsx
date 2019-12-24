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
      `}
    </style>
  </>
)
