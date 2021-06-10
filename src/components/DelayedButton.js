// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
  const callback = e => {
    cont eCopy = { ...e }
    setTimeout(this.props.onDelayedClick, this.props.delay, eCopy)
  }

  render() {
    return <button onClick={ callback }></button>
  }
}