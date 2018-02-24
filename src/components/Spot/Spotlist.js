import React, { Component } from 'react';
import Spot from './Spot';
import './Spotlist.css';

class Spotlist extends Component {
  render() {
    return (
      <div className="spotlist">
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
