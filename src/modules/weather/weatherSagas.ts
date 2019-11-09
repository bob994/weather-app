import { all, call, put, takeLatest, select } from '@redux-saga/core/effects';
import { getType } from 'typesafe-actions';
import axios, { AxiosResponse } from 'axios';

import { getCurrentWeather, GetCurrentWeatherRequestAction } from './weather';
import { getCoordinates } from '../location/location';
import { WeatherResponse } from '../../types/WeatherResponse';

function* getCurrentWeatherSaga(action: GetCurrentWeatherRequestAction) {
  const getWeather = (lat: number, lon: number) =>
    axios.get(
      `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );

  if (action.payload === '') {
    try {
      const coordinates: Coordinates = yield select(getCoordinates);
      const response: AxiosResponse<WeatherResponse> = yield call(
        getWeather,
        coordinates.latitude,
        coordinates.longitude
      );
      yield put(getCurrentWeather.success(response.data));
    } catch (error) {
      yield put(getCurrentWeather.failure());
    }
  }
}

export function* weatherSagas() {
  yield all([
    takeLatest(getType(getCurrentWeather.request), getCurrentWeatherSaga),
  ]);
}
