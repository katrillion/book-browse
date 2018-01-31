import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    const { match } = this.props;
    debugger;
    console.log(match);

    return (

      <div>
        <h2>{match.params.sortOrder}</h2>
      </div>
    );
  }
}