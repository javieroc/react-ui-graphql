import React from 'react';
import SpotInfo from './SpotInfo';
import SpotMap from './SpotMap';

const spot = {
  _id: '6',
  name: 'Central Norte',
  description: 'This is a description test',
  address: 'Fake street 123',
  phone: '987654321',
  location: {
    lat: '-24.7893779',
    lng: '-65.4075302',
  },
  photo: 'https://t3.ftcdn.net/jpg/01/87/76/70/240_F_187767015_Y123csJ7E7dqaQnQDSJCntlLTbXxsZdH.jpg',
  rating: 3,
  price: 150,
};

const SpotDetail = () => (
  <div className="spot-detail">
    <SpotInfo {...spot} />
  </div>
);

export default SpotDetail;
