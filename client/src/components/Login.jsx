import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../actions';

const Login = function() {
  const dispatch = useDispatch();
  const handleClick = function(event) {
    event.preventDefault();
    dispatch(login());
    console.log('clicked');
  }
  return (
    <React.Fragment>
      <form id='loginForm'>
        <label>
          username
          <input className='loginInput' type='text' name='username' />
        </label>
        <label>
          password
          <input className='loginInput' type='text' name='password' />
        </label>
        <input onClick={handleClick} id='submitInput' type='submit' value='Submit' />
      </form>
    </React.Fragment>
  );
};

export default Login;