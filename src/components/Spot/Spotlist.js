import React, { Component } from 'react';
import Spot from './Spot';
import './Spotlist.css';

const spotlist = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

class Spotlist extends Component {
  render() {
    const list = spotlist.map((spot) => {
      return <Spot {...spot} />
    });
    return (
      <div className="spotlist">
        {list}
      </div>
    );
  }
}

export default Spotlist;
