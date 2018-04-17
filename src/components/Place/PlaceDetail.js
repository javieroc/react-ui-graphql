import React from 'react';
import PlaceInfo from './PlaceInfo';
import PlaceMap from './PlaceMap';
import './PlaceDetail.css';

const PlaceDetail = ({ place }) => (
  <div className="place-detail">
    <PlaceInfo {...place} />
    <PlaceMap {...place.location} />
  </div>
);

export default PlaceDetail;
