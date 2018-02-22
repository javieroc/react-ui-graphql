import React, { Component } from 'react';

class Spot extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            src="./assets/field.jpg"
            alt=""
            width={360}
            height={240}
          />
          <h3>Spot Name</h3>
        </div>
        <div>
          <h4>Address</h4>
          <h4>Phone</h4>
          <h4>Rating</h4>
        </div>
      </div>
    );
  }
}

export default Spot;
