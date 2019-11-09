import { createLogic } from 'redux-logic';
import { getType } from 'typesafe-actions';

import { getCurrentWeather } from './weather';
import { LogicDependencies } from '../../types/LogicDependencies';
import { ReduxState } from '..';

const getCurrentWeatherLogic = createLogic<
  ReduxState,
  undefined,
  undefined,
  LogicDependencies
>({
  type: getType(getCurrentWeather.request),
  latest: true,
  async process({ httpClient, API_KEY, API_URL, getState }, dispatch, done) {
    const state: ReduxState = getState();

    try {
      const weather = await httpClient
        .get(
          `${API_URL}/weather?lat=${state.location.coordinates!.latitude}&lon=${
            state.location.coordinates!.longitude
          }&units=metric&APPID=${API_KEY}`
        )
        .then(respoonse => respoonse.data);

      dispatch(getCurrentWeather.success(weather));
      done();
    } catch (err) {
      dispatch(getCurrentWeather.failure());
      done();
    }
  },
});

export default [getCurrentWeatherLogic];
