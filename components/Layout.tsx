import * as React from 'react'
import Head from 'next/head'

// custom imports
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default (props) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/papercss@1.6.1/dist/paper.min.css"
      />
    </Head>
    <Nav />
    <div className="wrapper">{props.children}</div>
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

        .wrapper {
          display: flex;
          height: 80vh;
          justify-content: space-evenly;
          align-items: center;
        }

        h3 {
          margin-top: 0;
        }

        h4 {
          margin: 0;
        }
      `}
    </style>
  </>
)
