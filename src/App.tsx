import React, { useEffect, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';

import { Details } from './views/Details';
import { getCoordinates, getLocation } from './modules/location/location';
import {
  getCurrentWeatherSelector,
  getCurrentWeather,
  getWeatherError,
} from './modules/weather/weather';
import { Header } from './components/Header';
import { getWeatherStyle } from './utils/getWeatherStyle';

const App: FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  const dispatch = useDispatch();
  const coordinates = useSelector(getCoordinates);
  const weather = useSelector(getCurrentWeatherSelector);
  const weatherError = useSelector(getWeatherError);

  useEffect(() => {
    if (!coordinates) dispatch(getLocation.request());

    if (coordinates && !weather && !weatherError)
      dispatch(getCurrentWeather.request(null));
  }, [coordinates, weather, dispatch, weatherError]);

  const wrapperClassName = pathname === '/' ? 'landing' : 'details';

  const wrapperStyle =
    pathname === '/'
      ? getWeatherStyle(weather ? weather.weather[0].main : 'Sun')
      : undefined;

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      <Header />
      <Switch>
        <Route path="/details" exact={true} component={Details} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
