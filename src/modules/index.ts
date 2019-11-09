import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootSaga } from './rootSaga';

import { locationReducer, LocationState } from './location/location';
import { WeatherState, weatherReducer } from './weather/weather';

export interface ReduxState {
  location: LocationState;
  weather: WeatherState;
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export { store };
