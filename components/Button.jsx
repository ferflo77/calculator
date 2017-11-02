import React, { Component } from 'react'
import PropTypes from 'prop-types'

const style = {
  width: '65px',
  height: '65px',
  marginTop: '5px',
  borderRadius: '0.5em',
  background: 'black',
  position: 'relative',
  border: '2px solid #8E890A',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  float: 'left',
}

const style2 = {
  color: 'white',
  fontFamily: 'Raleway',
}

export default class Button extends Component {
  render() {
    return (
      <button style={style} onClick={this.props.onClick}>
        <h1 style={style2}>{this.props.content}</h1>
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
}
