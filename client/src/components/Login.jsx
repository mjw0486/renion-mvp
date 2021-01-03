import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, toggleActiveUsername, toggleActivePassword, updatePassword, updateUsername } from '../actions';
import { useHistory } from "react-router-dom";

const Login = function() {
  const history = useHistory();
  // history.push("/login");
  const dispatch = useDispatch();
  const handleClick = function(event) {
    event.preventDefault();
    dispatch(login());
    dispatch(updatePassword(''));
    // history.push("/newroom");
  }
  const handleFocus = function(event) {
    event.preventDefault();
    if (event.target.id === 'screenNameInput' && !event.target.value) {
      dispatch(toggleActiveUsername());
    } else if (event.target.id === 'passwordInput' && !event.target.value) {
      dispatch(toggleActivePassword());
    }
  }
  const handleBlur = function(event) {
    event.preventDefault();
    if (event.target.id === 'screenNameInput' && !event.target.value) {
      dispatch(toggleActiveUsername());
    } else if (event.target.id === 'passwordInput' && !event.target.value) {
      dispatch(toggleActivePassword());
    }
  }
  const handleUserChange = function(event) {
    event.preventDefault();
    dispatch(updateUsername(event.target.value));
  }
  const handlePasswordChange = function(event) {
    event.preventDefault();
    dispatch(updatePassword(event.target.value));
  }
  const userInputIsActive = useSelector(state => state.userInputIsActive);
  const passwordIsActive = useSelector(state => state.passwordIsActive);
  const username = useSelector(state => state.username);
  const password = useSelector(state => state.password);


  return (
      <form id='loginForm'>
        <h1 id='logo'>Reunion</h1>
        <h1 id='subTitle'>Please Sign In</h1>
        <div id='usernameContainer' className={userInputIsActive ? 'input-container active' : 'input-container'}>
          <label htmlFor='usernameInput' >Username </label>
          <input onFocus={handleFocus} onBlur={handleBlur} id='usernameInput' type='text' onChange={handleUserChange} className={userInputIsActive ? 'showUserPlaceholder' : 'hideUserPlaceholder'} placeholder='Enter Username' value={username} autocomplete='off'/>
        </div>
        <div id='passwordContainer' className={passwordIsActive ? 'input-container active' : 'input-container'}>
          <label htmlFor='passwordInput'> Password </label>
          <input onFocus={handleFocus} onBlur={handleBlur} id='passwordInput' type='password' onChange={handlePasswordChange} className={passwordIsActive ? 'showPasswordPlaceholder' : 'hidePasswordPlaceholder'} placeholder='Enter Password' value={password} autocomplete='off'/>
        </div>
        <input onClick={handleClick} id='submitLogin' className='submitButton' type='submit' value='Login' />
      </form>
  );
};

export default Login;