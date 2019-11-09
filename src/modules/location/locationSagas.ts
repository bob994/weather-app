import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getType } from 'typesafe-actions';

import { getLocation } from './location';
import { getUserLocation } from '../../services/location';

function* getLocationSaga() {
  try {
    const location = yield call(getUserLocation);
    yield put(getLocation.success(location.coords));
  } catch (error) {
    yield put(getLocation.failure());
  }
}

export function* locationSagas() {
  yield all([takeLatest(getType(getLocation.request), getLocationSaga)]);
}
