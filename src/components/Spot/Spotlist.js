import React, { Component } from 'react';
import SpotCard from './SpotCard';
import './Spotlist.css';

const spotlist = [
  {
    _id: '1',
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
    prece: 130,
  },
  {
    _id: '2',
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
    prece: 150,
  },
  {
    _id: '3',
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
    prece: 130,
  },
  {
    _id: '4',
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
    prece: 100,
  },
  {
    _id: '5',
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
    prece: 160,
  },
  {
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
    prece: 150,
  },
];

class Spotlist extends Component {
  render() {
    const list = spotlist.map((spot) => {
      return <SpotCard key={spot._id} {...spot} />
    });
    return (
      <div className="spotlist">
        {list}
      </div>
    );
  }
}

export default Spotlist;
