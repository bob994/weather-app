import React from 'react';

import { getWeatherStyle } from '../utils/getWeatherStyle';

export const Landing = () => {
  const sunnyStyle = getWeatherStyle('sunny');

  return (
    <div className="landing" style={sunnyStyle}>
      LandingPage
    </div>
  );
};
