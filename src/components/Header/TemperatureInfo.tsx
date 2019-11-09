import React, { FunctionComponent } from 'react';
import { WeatherResponse } from '../../types/WeatherResponse';
import { capitalizeString } from '../../utils/capitalizeString';

interface Props {
  weather: WeatherResponse;
}

export const TemperatureInfo: FunctionComponent<Props> = ({ weather }) => {
  const temp = Math.round(weather.main.temp);
  const desc = capitalizeString(weather.weather[0].description);
  const icon = weather.weather[0].icon;

  return (
    <div>
      <div className="header-temperature">
        {temp}&deg;
        <img
          className="header-temperature-icon"
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="Weather icon"
        />
      </div>
      <div className="header-type">{desc}</div>
      <button className="header-button" type="button">
        More details
      </button>
    </div>
  );
};
