import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension';

const logicMiddleware = createLogicMiddleware(); // TODO Add logics later

const rootReducer = combineReducers({}); // TODO Add reducers later

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logicMiddleware))
);

export { store };
