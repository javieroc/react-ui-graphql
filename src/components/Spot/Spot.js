import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import './Spot.css';

class Spot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      address,
      phone,
      rating,
      photo,
    } = this.props;
    return (
      <div className="spot">
        <div>
          <img
            src={photo}
            alt=""
            width={360}
            height={240}
          />
        </div>
        <div className="spot-name">{name}</div>
        <div className="spot-info">
          <div>Address: {address}</div>
          <div>Phone: {phone}</div>
          <div className="spot-rating">
            <ReactStars
              count={5}
              size={24}
              value={rating}
              color2={'#ffd700'}
            />
          </div>
        </div>
      </div>
    );
  }
}

Spot.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  rating: PropTypes.number,
  photo: PropTypes.string,
};

export default Spot;
