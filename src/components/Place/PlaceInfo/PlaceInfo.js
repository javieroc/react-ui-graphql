import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Gallery from 'react-photo-gallery';
import './PlaceInfo.css';

const PlaceInfo = (props) => {
  const {
    name,
    description,
    address,
    phone,
    photos,
    rating,
  } = props;
  return (
    <div className="place-info">
      <Gallery photos={photos} />
      <div className="place-info-data">
        <h3>{name}</h3>
        <h4>Phone: <small>{phone}</small></h4>
        <h4>Address: <small>{address}</small></h4>
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

PlaceInfo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  rating: PropTypes.number,
  photos: PropTypes.arrayOf(PropTypes.object),
};

export default PlaceInfo;
