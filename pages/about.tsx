import * as React from 'react'

// custom components
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div>
      <h3>React Snake Game</h3>
      <p>
        This game was built as a fun project with React, Next.js, Typescript,
        etc. Jest and Enzyme are used to write some simple snapshot tests.
        Special Credits: Sweet Alert 2, React Use Interval by Dan Abramov, and
        all the other libraries used to get the project done.
      </p>

      <p>
        Associated Article:{' '}
        <a href="https://dev.to/fuad/article-name" target="_blank">
          Article Name
        </a>
      </p>

      <p>
        Associated Github Repo:{' '}
        <a href="https://github.com/nfuad/snakely" target="_blank">
          Snakely Game
        </a>
      </p>
      <style jsx>{`
        & {
          max-width: 60%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  </Layout>
)
