import React from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg';
import { getCurrentWeatherSelector } from '../../store/weather/weather';
import { capitalizeString } from '../../utils/capitalizeString';

export const Header = () => {
  const weather = useSelector(getCurrentWeatherSelector);

  return (
    <header>
      <div className="header-input-group">
        <input type="text" value={weather ? weather.name : ''} />
        <SearchIcon />
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
