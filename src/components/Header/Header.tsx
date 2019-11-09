import React, { useState, useEffect, ChangeEventHandler } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getCurrentWeatherSelector,
  getCurrentWeather,
  getWeatherIsFetching,
} from '../../modules/weather/weather';

import { InputGroup } from './InputGroup';
import { TemperatureInfo } from './TemperatureInfo';

export const Header = () => {
  const dispatch = useDispatch();
  const weather = useSelector(getCurrentWeatherSelector);
  const isFetching = useSelector(getWeatherIsFetching);

  const [city, setCity] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (weather && city === '') setCity(weather.name);
  }, [weather, city]);

  const handleCityChange: ChangeEventHandler<HTMLInputElement> = e => {
    setCity(e.target.value);

    dispatch(getCurrentWeather.request(e.target.value));
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <header>
      <InputGroup
        city={city}
        isFetching={isFetching}
        isFocused={isFocused}
        handleCityChange={handleCityChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
      {weather && <TemperatureInfo weather={weather} />}
    </header>
  );
};
