import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Calculator from './Calculator'

configure({ adapter: new Adapter() })

describe('<Calculator />', () => {
  it('Button component prop should be keyPress function', () => {
    const wrapper = shallow(<Calculator />)
    expect(wrapper.find('Button').first()
      .prop('onClick')).toBe(wrapper.instance().keyPress.bind())
  })
})
