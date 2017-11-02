import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './Button'

configure({ adapter: new Adapter() })

describe('<Button />', () => {
  it('should have a number or operand in the button', () => {
    const wrapper = shallow(<Button content="3" />)
    const actual = wrapper.find('h1').text()
    expect(actual).toMatch(/^[0-9]+$/)
  })
})
