import * as React from 'react'

// custom components
import Game from '../components/Game'
import Layout from '../components/Layout'
import HowToPlay from '../components/HowToPlay'

export default () => (
  <Layout>
    <HowToPlay />
    <Game />
  </Layout>
)
