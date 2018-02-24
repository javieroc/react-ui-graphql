import React, { Component } from 'react';
import './Spot.css';

class Spot extends Component {
  render() {
    return (
      <div className="spot">
        <div>
          <img
            src="./assets/field.jpg"
            alt=""
            width={360}
            height={240}
          />
        </div>
        <div className="spot-name">Spot Name</div>
        <div className="spot-info">
          <div>Address: calle falsa 123s</div>
          <div>Phone: 123123123</div>
        </div>
      </div>
    );
  }
}

export default Spot;
