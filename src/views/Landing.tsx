import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from './landing/Header';
import { getWeatherStyle } from '../utils/getWeatherStyle';
import { getLocation, getCoordinates } from '../store/location/location';

export const Landing = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector(getCoordinates);

  useEffect(() => {
    if (!coordinates) dispatch(getLocation.request(''));
  }, [coordinates, dispatch]);

  const sunnyStyle = getWeatherStyle('sunny');

  return (
    <div className="landing" style={sunnyStyle}>
      <Header />
    </div>
  );
};
