import React, {
  useState,
  useEffect,
  ChangeEventHandler,
  FunctionComponent,
  MouseEvent,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getCurrentWeatherSelector,
  getCurrentWeather,
  getWeatherIsFetching,
} from '../modules/weather/weather';

import { InputGroup } from './header/InputGroup';
import { TemperatureInfo } from './header/TemperatureInfo';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const Header: FunctionComponent<RouteComponentProps> = ({
  history,
  location,
}) => {
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

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    history.push('/details');
  };

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
      {weather && location.pathname === '/' && (
        <button
          className="header-button"
          type="button"
          onClick={handleButtonClick}
        >
          More details
        </button>
      )}
    </header>
  );
};

const enchantedHeader = withRouter(Header);

export { enchantedHeader as Header };
