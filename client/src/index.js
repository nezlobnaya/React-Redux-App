import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer } from './reducers'

import './index.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));

