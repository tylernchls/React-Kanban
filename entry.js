// Equiv to const react = require('react')
// New ES6 way, need babel in order to use ES6
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import configureStore from './configureStore';


const store = configureStore();

const initialState = store.getState();




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content'),

);
