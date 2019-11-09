import React from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as WindIcon } from '../assets/icons/Wind.svg';
import { ReactComponent as PressureIcon } from '../assets/icons/Pressure.svg';
import { ReactComponent as CloudinessIcon } from '../assets/icons/Cloudiness.svg';
import { ReactComponent as HumidityIcon } from '../assets/icons/Humidity.svg';

import { getCurrentWeatherSelector } from '../modules/weather/weather';
import { GridItem } from './details/GridItem';

export const Details = () => {
  const weather = useSelector(getCurrentWeatherSelector);

  if (!weather) return null;

  return (
    <>
      <div className="details-header">Details</div>
      <div className="details-grid">
        <GridItem text={`${weather.wind.speed} km/h`} icon={WindIcon} />
        <GridItem text={`${weather.main.pressure} hpa`} icon={PressureIcon} />
        <GridItem text={`${weather.clouds.all} %`} icon={CloudinessIcon} />
        <GridItem text={`${weather.main.humidity} %`} icon={HumidityIcon} />
      </div>
    </>
  );
};
