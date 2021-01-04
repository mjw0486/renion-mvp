import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/styles.css';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const routing = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(
  routing,
  document.getElementById('app')
);
