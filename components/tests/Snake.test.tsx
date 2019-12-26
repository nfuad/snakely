import * as React from 'react'
import { shallow, mount, render } from 'enzyme'

import Snake from '../Snake'

const mockData = {
  snakeDots: [
    [0, 0],
    [2, 0]
  ]
}

describe('Snake component', () => {
  it('renders', () => {
    shallow(<Snake snakeDots={mockData.snakeDots} />)
  })

  it('matches the snapshot', () => {
    const component = mount(<Snake snakeDots={mockData.snakeDots} />)
    expect(component).toMatchSnapshot()
  })

  it('updates via props', () => {
    const component = mount(<Snake snakeDots={mockData.snakeDots} />)
    expect(component).toMatchSnapshot()

    component.setProps({
      snakeDots: [
        [0, 2],
        [2, 2]
      ]
    })

    expect(component).toMatchSnapshot()
  })
})
