import { all, call, put, select, debounce } from '@redux-saga/core/effects';
import { getType } from 'typesafe-actions';
import { AxiosResponse } from 'axios';

import { getCurrentWeather, GetCurrentWeatherRequestAction } from './weather';
import { getCoordinates } from '../location/location';
import { WeatherResponse } from '../../types/WeatherResponse';
import {
  getWeatherByCoordinates,
  getWeatherByCityName,
} from '../../services/api';

function* getCurrentWeatherSaga(action: GetCurrentWeatherRequestAction) {
  if (action.payload === null) {
    yield call(getCurrentWeatherByCoordinatesSaga);
  } else {
    yield call(getCurrentWeatherByCityNameSaga, action.payload);
  }
}

function* getCurrentWeatherByCoordinatesSaga() {
  try {
    const coordinates: Coordinates = yield select(getCoordinates);
    const { latitude, longitude } = coordinates;

    const response: AxiosResponse<WeatherResponse> = yield call(
      getWeatherByCoordinates,
      latitude,
      longitude
    );

    yield put(getCurrentWeather.success(response.data));
  } catch (error) {
    yield put(getCurrentWeather.failure());
  }
}

function* getCurrentWeatherByCityNameSaga(cityName: string) {
  try {
    const response: AxiosResponse<WeatherResponse> = yield call(
      getWeatherByCityName,
      cityName
    );

    yield put(getCurrentWeather.success(response.data));
  } catch (error) {
    yield put(getCurrentWeather.failure());
  }
}

export function* weatherSagas() {
  yield all([
    debounce(500, getType(getCurrentWeather.request), getCurrentWeatherSaga),
  ]);
}
