import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Router, browserHistory } from 'react-router';

// Stylesheets
import '../scss/style.scss';

import reducers from './reducers';
import routes from './routes';

const localStorageMiddleware = store => next => action => {
    next(action);
    window.localStorage.setItem('phoneBook', JSON.stringify(store.getState()));
};

const store = createStore(reducers, applyMiddleware(localStorageMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));