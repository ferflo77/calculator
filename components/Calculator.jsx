import React, { Component } from 'react'
import Button from './Button'
import DisplayArea from './DisplayArea'
import Label from './Label'

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 70px)',
  justifyContent: 'center',
  outline: 'none',
}

const style2 = {
  width: '330px',
  height: '430px',
  borderRadius: '1em',
  background: '#E11C3A',
  margin: '2em auto',
}

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      op1: '',
      op2: '',
      sign: '',
      display: '',
    }

    this.listOf = ['9', '8', '7', '*', '6', '5', '4', '+', '3', '2', '1', '-', '0', 'CLR', '=']
  }

  keyPress(index) {
    if (index === 'CLR') {
      this.setState({
        op1: '',
        op2: '',
        sign: '',
        display: '',
      })
    } else if (index !== '=' && this.state.sign === '' && !this.validateSign(index)) {
      const actual = this.state.op1
      const conversion = Number(actual + index)
      if (conversion < 1000000000) {
        this.setState({
          op1: conversion,
          display: String(conversion),
        })
      }
    } else if (index === '=' || this.validateSign(index)) {
      const firstOp = this.state.op1
      const secondOp = this.state.op2
      const signValue = this.state.sign
      const resValue = this.makeOperation(firstOp, secondOp, signValue)
      this.setState({
        op1: resValue,
        op2: '',
        sign: index,
        display: String(resValue),
      })
    } else {
      const actual = this.state.op2
      const conversion = Number(actual + index)
      if (conversion < 1000000000) {
        this.setState({
          op2: conversion,
          display: conversion,
        })
      }
    }
  }
  validateSign(param) {
    if (param === '*' || param === '+' || param === '-') {
      return true
    }
    return false
  }

  makeOperation(op1, op2, sign) {
    if (!op2 || !sign) {
      return op1
    }
    let res
    const first = Number(op1)
    const second = Number(op2)
    switch (sign) {
      case '+':
        res = first + second
        return res
      case '*':
        res = first * second
        return res
      case '-':
        res = first - second
        return res
      default:
        return 'none'
    }
  }

  render() {
    return (
      <div style={style2}>
        <Label />
        <DisplayArea ops={this.state.display} />
        <div style={style}>
          { this.listOf.map((value) => {
            const keyPress = this.keyPress.bind(this, value)
            return <Button key={value} content={value} onClick={keyPress} />
            })
          }
        </div>
      </div>
    )
  }
}
