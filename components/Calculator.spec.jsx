import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Calculator from './Calculator'

configure({ adapter: new Adapter() })

describe('<Calculator />', () => {
  it('makeOperation function should return a correct operation', () => {
    const wrapper = shallow(<Calculator />)
    const inst = wrapper.instance()
    expect(inst.makeOperation(4, 3, '*')).toBe(12)
  })
  it('makeOperation function should return null if 2 nulls are passed', () => {
    const wrapper = shallow(<Calculator />)
    const inst = wrapper.instance()
    expect(inst.makeOperation(3, null, null)).toBe(3)
  })
})
