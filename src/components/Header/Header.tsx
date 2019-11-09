import React, { useState, useEffect, ChangeEventHandler } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg';
import {
  getCurrentWeatherSelector,
  getCurrentWeather,
} from '../../modules/weather/weather';
import { capitalizeString } from '../../utils/capitalizeString';

export const Header = () => {
  const dispatch = useDispatch();
  const weather = useSelector(getCurrentWeatherSelector);
  const [city, setCity] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (weather) setCity(weather.name);
  }, [weather]);

  const handleCityChange: ChangeEventHandler<HTMLInputElement> = e => {
    setCity(e.target.value);
    dispatch(getCurrentWeather.request(e.target.value));
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <header>
      <div className="header-input-group">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {!isFocused && <SearchIcon />}
      </div>
      {weather && (
        <>
          <div className="header-temperature">
            {Math.round(weather.main.temp)}&deg;
          </div>
          <div className="header-type">
            {capitalizeString(weather.weather[0].description)}
          </div>
          <button className="header-button" type="button">
            More details
          </button>
        </>
      )}
    </header>
  );
};
