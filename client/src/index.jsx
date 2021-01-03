import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import InviteUsers from './components/InviteUsers.jsx';
import Login from './components/Login.jsx';
import Room from './components/Room.jsx';
import './styles/styles.css';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// import { io } from 'socket.io-client';
// import createSocket from './socket.js';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const routing = (
//   <Provider store={store}>
//     <Router>
//       <div>
//         {/* <Route path="/" component={App} /> */}
//         <Route exact path="/" component={Login} />
//         <Route path="/newroom" component={InviteUsers} />
//         <Route path='/room/:id' component={Room} />
//       </div>
//     </Router>
//   </Provider>
// )

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
