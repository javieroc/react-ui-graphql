import React from 'react';
import PlaceInfo from './PlaceInfo/PlaceInfo';
import PlaceMap from './PlaceMap/PlaceMap';
import './Place.css';

const PlaceDetail = ({ place }) => (
  <div className="place-detail">
    <PlaceInfo {...place} />
    <PlaceMap {...place.location} />
  </div>
);

export default PlaceDetail;
