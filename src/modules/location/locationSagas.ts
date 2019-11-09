import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getType } from 'typesafe-actions';

import { getLocation } from './location';

function* getLocationSaga() {
  const getUserLocation = () =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        location => resolve(location),
        error => reject(error)
      );
    });

  const location = yield call(getUserLocation);

  if (location) {
    yield put(getLocation.success(location.coords));
  } else {
    yield put(getLocation.failure());
  }
}

export function* locationSagas() {
  yield all([takeLatest(getType(getLocation.request), getLocationSaga)]);
}
