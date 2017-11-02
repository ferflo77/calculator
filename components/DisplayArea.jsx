import React, { Component } from 'react'
import PropTypes from 'prop-types'

const other = {
  width: '280px',
  fontFamily: 'Raleway',
  fontSize: '2em',
  height: '50px',
  display: 'block',
  margin: 'auto',
  background: '#d6d6d6',
  borderRadius: '0.8em',
  outline: 'none',
  textAlign: 'right',
  paddingRight: '0.7em',
}

export default class DisplayArea extends Component {
  render() {
    if (this.props.ops.length > 9) {
      return <textarea style={other} value="ERROR" readOnly="true" />
    }

    return (
      <div>
        <textarea value={this.props.ops} style={other} readOnly="true" />
      </div>
    )
  }
}

DisplayArea.propTypes = {
  ops: PropTypes.string.isRequired,
}
