import * as React from 'react'
import { shallow } from 'enzyme'

import Game from '../Game'

describe('Game component', () => {
  it('renders', () => {
    shallow(<Game />)
  })
})
