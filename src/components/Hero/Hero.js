import React from 'react';
import Search from './Search';
import './Hero.css';

const Hero = ({ refetch }) => (
  <div className="hero-section">
    <Search refetch={refetch} />
  </div>
);

export default Hero;
