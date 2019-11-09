import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension';

import { locationReducer, LocationState } from './location/location';
import locationLogic from './location/locationLogic';

export interface ReduxState {
  location: LocationState;
}

const logicMiddleware = createLogicMiddleware([...locationLogic]);

const rootReducer = combineReducers({
  location: locationReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logicMiddleware))
);

export { store };
