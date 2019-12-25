import * as React from 'react'
import { shallow, mount, render } from 'enzyme'

import Board from '../Board'

describe('Board component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Board
        data={{
          food: [0, 1],
          snakeDots: [
            [0, 0],
            [2, 0]
          ]
        }}
      />
    )
    expect(component).toMatchSnapshot()
  })
})
