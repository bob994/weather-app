import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

import { LogicDependencies } from '../types/LogicDependencies';

import { locationReducer, LocationState } from './location/location';
import locationLogic from './location/locationLogic';
import { WeatherState, weatherReducer } from './weather/weather';
import weatherLogic from './weather/weatherLogic';

export interface ReduxState {
  location: LocationState;
  weather: WeatherState;
}

const deps: LogicDependencies = {
  API_URL: process.env.REACT_APP_API_URL!,
  API_KEY: process.env.REACT_APP_API_KEY!,
  httpClient: axios,
};

const logics = [...locationLogic, ...weatherLogic];

const logicMiddleware = createLogicMiddleware(logics, deps);

const rootReducer = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logicMiddleware))
);

export { store };
