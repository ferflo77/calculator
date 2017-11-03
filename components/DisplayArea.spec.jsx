import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DisplayArea from './DisplayArea'

configure({ adapter: new Adapter() })

describe('<DisplayArea />', () => {
  it('input size has to be smaller than 9 characters', () => {
    const wrapper = shallow(<DisplayArea ops="999999" />)
    const actual = wrapper.find('textarea').props().value
    expect(actual.length).toBeLessThan(9)
  })
  it('input size should not be larger than 9 characters', () => {
    const wrapper = shallow(<DisplayArea ops="121212121212" />)
    expect(wrapper.text()).toEqual('')
  })
})
