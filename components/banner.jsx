import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    const { text, textWidth, bgColor } = this.props;
    const bgGradient = `linear-gradient(to bottom right, ${bgColor} 278px, white 20px)`

    return (

      <div className="banner" style={{ background: bgGradient }}>
        <h2 className={textWidth}>{text}</h2>
      </div>
    );
  }
}