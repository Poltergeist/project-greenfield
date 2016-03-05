import React from "react";
import ReactDOM from "react-dom";

// import { createStore, combineReducers } from 'redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Counter from './components/counter';
import SpecNote from './components/SpecNote';

import * as reducers from './reducers/index.js';

let reducer = combineReducers(reducers);
let store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <SpecNote />
  </Provider>,
  document.querySelector(".main")
);
