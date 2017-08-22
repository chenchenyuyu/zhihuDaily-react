import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import 'kz-icomoon-font';
import App from './app';
// import ds from './ds/index';
// import reducers from './reducers';

const initialState = window.INITIAL_STATE;
const middleware = [thunk];
const store = createStore(
  initialState,
  applyMiddleware(...middleware),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
