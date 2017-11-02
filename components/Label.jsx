import React, { Component } from 'react'

const font = {
  fontFamily: 'Raleway',
  marginLeft: '5.5em',
}

export default class Label extends Component {
  render() {
    return (
      <div style={font}>
        <h1>Calculator</h1>
      </div>
    )
  }
}
