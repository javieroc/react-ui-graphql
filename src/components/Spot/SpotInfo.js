import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import './SpotInfo.css';

const SpotInfo = (props) => {
  const {
    name,
    description,
    address,
    phone,
    photo,
    rating,
    price,
  } = props;
  return (
    <div className="spot-info">
      <img
        src={photo}
        alt=""
      />
      <div>
        <h3>{name}</h3>
        <h4>Phone: {phone}</h4>
        <h4>Address: {address}</h4>
        <h4>Price: {price}</h4>
        <p>{description}</p>
        <div className="">
          <ReactStars
            count={5}
            size={24}
            value={rating}
            color2="#ffd700"
          />
        </div>
      </div>
    </div>
  );
};

SpotInfo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  rating: PropTypes.number,
  photo: PropTypes.string,
  price: PropTypes.number,
};

export default SpotInfo;
