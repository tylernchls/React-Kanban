// Equiv to const react = require('react')
// New ES6 way, need babel in order to use ES6
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';


const reducer = combineReducers(reducers);
const store = createStore(reducer);

const initialState = store.getState();
import App from './components/App.js';




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content'),

);
