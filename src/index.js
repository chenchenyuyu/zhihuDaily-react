import React from 'react';
import { render } from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import App from './app';
// import reducers from './reducers';
//
// const initialState = window.INITIAL_STATE;
// const middleware = [thunk];
// const store = createStore(
//   initialState,
//   applyMiddleware(...middleware),
// );

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
