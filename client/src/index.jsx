import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/styles.css';
import { createStore } from 'redux';
import allReducer from './Reducers';
import { Provider } from 'react-redux';
// import { io } from 'socket.io-client';
// import createSocket from './socket.js';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    {/* {createSocket()} */}
    <App />
  </Provider>,
  document.getElementById('app')
);
