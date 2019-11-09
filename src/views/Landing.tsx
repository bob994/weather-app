import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../components/Header/Header';
import { getWeatherStyle } from '../utils/getWeatherStyle';
import { getLocation, getCoordinates } from '../modules/location/location';
import {
  getCurrentWeather,
  getCurrentWeatherSelector,
} from '../modules/weather/weather';

export const Landing = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector(getCoordinates);
  const weather = useSelector(getCurrentWeatherSelector);

  useEffect(() => {
    if (!coordinates) dispatch(getLocation.request(''));

    if (coordinates && !weather) dispatch(getCurrentWeather.request(''));
  }, [coordinates, weather, dispatch]);

  const sunnyStyle = getWeatherStyle(weather ? weather.weather[0].main : 'Sun');

  return (
    <div className="landing" style={sunnyStyle}>
      <Header />
    </div>
  );
};
