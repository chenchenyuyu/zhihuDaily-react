import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './app';
import reducers from './redux/reducers/index';

const initialState = window.INITIAL_STATE;
const middleware = [thunk];
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
