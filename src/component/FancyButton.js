import React, { Component } from 'react';

export default class FancyButton extends Component {
  render() {
    const { clickHandler, text} = this.props;  

    return (
      <button onClick={clickHandler}>
        {text}
      </button>
    );
  }
}