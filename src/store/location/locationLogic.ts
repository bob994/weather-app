import { createLogic } from 'redux-logic';
import { getType } from 'typesafe-actions';

import { getLocation } from './location';

const getLocationLogic = createLogic({
  type: getType(getLocation.request),
  latest: true,
  process(_, dispatch, done) {
    const gl = navigator.geolocation;

    gl.getCurrentPosition(
      position => {
        const { coords } = position;

        dispatch(getLocation.success(coords));
        done();
      },
      () => {
        dispatch(getLocation.failure());
        done();
      }
    );
  },
});

export default [getLocationLogic];
