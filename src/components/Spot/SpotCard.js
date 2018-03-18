import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import './SpotCard.css';

const SpotCard = (props) => {
  const {
    _id,
    name,
    address,
    phone,
    rating,
    photos,
  } = props;
  return (
    <div className="spot-card">
      <Link to={`/spots/${_id}`}>
        <div>
          <img
            src={photos[0]}
            alt=""
            width={360}
            height={240}
          />
        </div>
        <div className="spot-card-name">{name}</div>
        <div className="spot-card-info">
          <div>Address: {address}</div>
          <div>Phone: {phone}</div>
          <div className="spot-card-rating">
            <ReactStars
              count={5}
              size={24}
              value={rating}
              color2="#ffd700"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

SpotCard.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  rating: PropTypes.number,
  photos: PropTypes.array,
};

export default SpotCard;
