import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

const logicMiddleware = createLogicMiddleware(); // TODO Add logics later

const rootReducer = combineReducers({}); // TODO Add reducers later

const store = createStore(rootReducer, applyMiddleware(logicMiddleware));

export { store };
