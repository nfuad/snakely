import React from 'react'
import Link from 'next/link'
import GithubCorner from 'react-github-corner'

export default () => (
  <nav>
    <GithubCorner href="https://github.com/nfuad/snakely" />
    <ul>
      <li>
        <Link href="/">
          <a>Game</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <a href="https://github.com/nfuad/snakely" target="_blank">
          Github
        </a>
      </li>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }

      ul {
        display: flex;
        justify-content: space-between;
        width: 50%;
        margin: 0 auto;
        margin-top: 15px;
      }

      nav > ul {
        padding: 4px 16px;
      }

      li {
        display: flex;
        padding: 6px 8px;
      }
    `}</style>
  </nav>
)
