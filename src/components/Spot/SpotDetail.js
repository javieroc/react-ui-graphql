import React from 'react';
import SpotInfo from './SpotInfo';
import SpotMap from './SpotMap';
import './SpotDetail.css';

const spot = {
  _id: '6',
  name: 'Central Norte',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus debitis nesciunt repellat ipsa error sapiente laboriosam consectetur dolore, facilis nisi repellendus? Quo fugit hic iusto veritatis quos. Cumque, amet asperiores!',
  address: 'Fake street 123',
  phone: '987654321',
  location: {
    lat: -24.7893779,
    lng: -65.4075302,
  },
  photo: 'https://t3.ftcdn.net/jpg/01/87/76/70/240_F_187767015_Y123csJ7E7dqaQnQDSJCntlLTbXxsZdH.jpg',
  rating: 3,
  price: 150,
};

const SpotDetail = () => (
  <div className="spot-detail">
    <SpotInfo {...spot} />
    <SpotMap {...spot} />
  </div>
);

export default SpotDetail;
