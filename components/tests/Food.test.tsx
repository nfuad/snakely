import * as React from 'react'
import { shallow, mount } from 'enzyme'

import Food from '../Food'

const mockData = {
  dot: [0, 1]
}

describe('Food component', () => {
  it('renders', () => {
    shallow(<Food dot={mockData.dot} />)
  })

  it('matches the snapshot', () => {
    const component = mount(<Food dot={mockData.dot} />)
    expect(component).toMatchSnapshot()
  })

  it('updates via props', () => {
    const component = mount(<Food dot={mockData.dot} />)
    expect(component).toMatchSnapshot()

    component.setProps({
      dot: [1, 0]
    })

    expect(component).toMatchSnapshot()
  })
})
