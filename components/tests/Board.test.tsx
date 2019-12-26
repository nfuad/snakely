import * as React from 'react'
import { shallow, mount } from 'enzyme'

import Board from '../Board'

const mockData = {
  food: [0, 1],
  snakeDots: [
    [0, 0],
    [2, 0]
  ]
}

describe('Board component', () => {
  it('renders', () => {
    shallow(
      <Board
        data={{
          food: mockData.food,
          snakeDots: mockData.snakeDots
        }}
      />
    )
  })

  it('matches the snapshot', () => {
    const component = mount(
      <Board
        data={{
          food: mockData.food,
          snakeDots: mockData.snakeDots
        }}
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('updates via props', () => {
    const component = mount(
      <Board
        data={{
          food: mockData.food,
          snakeDots: mockData.snakeDots
        }}
      />
    )
    expect(component).toMatchSnapshot()

    component.setProps({
      food: [1, 0],
      snakeDots: [
        [0, 2],
        [2, 2]
      ]
    })

    expect(component).toMatchSnapshot()
  })
})
