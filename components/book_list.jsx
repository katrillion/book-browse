import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    const { match } = this.props;

    return (

      <div>
        <h2>{match.params.sortOrder}</h2>
      </div>
    );
  }
}