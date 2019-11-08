import React from 'react';

import { getWeatherStyle } from '../utils/getWeatherStyle';
import { Header } from './landing/Header';

export const Landing = () => {
  const sunnyStyle = getWeatherStyle('sunny');

  return (
    <div className="landing" style={sunnyStyle}>
      <Header />
    </div>
  );
};
