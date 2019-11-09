import { all, fork } from '@redux-saga/core/effects';
import { locationSagas } from './location/locationSagas';
import { weatherSagas } from './weather/weatherSagas';

export function* rootSaga() {
  yield all([fork(locationSagas), fork(weatherSagas)]);
}
