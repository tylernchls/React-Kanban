import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const loggerMiddleware = createLogger();

export default function configureStore(preLoadedState) {
  return createStore(
    reducer,
    preLoadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  )
};