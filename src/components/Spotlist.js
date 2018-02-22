import React, { Component } from 'react';
import Spot from './Spot';

class Spotlist extends Component {
  render() {
    return (
      <div>
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
    );
  }
}

export default Spotlist;
