import * as React from 'react'

export default () => (
  <footer>
    <p>
      Created with love by{' '}
      <a href="https://github.com/nfuad" target="_blank">
        Nafis Fuad
      </a>
      . It's an open source project, find the{' '}
      <a href="https://github.com/nfuad/snakely">source code here</a>.
    </p>
    <p>Year {new Date().getFullYear()}. Feel free to copy me 👌</p>
    <style jsx>{`
      footer {
        text-align: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 15px;
      }

      p {
        width: 70%;
        margin: 0 auto;
      }
    `}</style>
  </footer>
)
