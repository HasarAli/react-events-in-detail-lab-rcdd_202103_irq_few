// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
  callback = (e) => {
    e.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  }

  render() {
    return <button onClick={ this.callback }></button>
  }
}