import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, toggleActiveScreenName, toggleActivePassword, updatePassword, updateScreenName, createScreenName } from '../actions';
import SVG from './SVG.jsx';
import { io } from 'socket.io-client';
const socket = io('/');

const LoginScreen = function() {
  const dispatch = useDispatch();
  const screenNameInputIsActive = useSelector(state => state.screenNameInputIsActive);
  const screenName = useSelector(state => state.screenName);
  const myAvatar = useSelector(state => state.myAvatar);
  const handleClick = function(event) {
    event.preventDefault();
    dispatch(login());
    dispatch(createScreenName(screenName));
  }
  const handleFocus = function(event) {
    event.preventDefault();
    if (event.target.id === 'screenNameInput' && !event.target.value) {
      dispatch(toggleActiveScreenName());
    }
  }
  const handleBlur = function(event) {
    event.preventDefault();
    if (event.target.id === 'screenNameInput' && !event.target.value) {
      dispatch(toggleActiveScreenName());
    }
  }
  const handleUserChange = function(event) {
    event.preventDefault();
    dispatch(updateScreenName(event.target.value));
  }

  return (
      <form id='loginForm'>
        <h1 id='logo'>Reunion</h1>
        <h1 id='subTitle'>Your Name + Likeness</h1>
        <SVG />
        <div id='screenNameContainer' className={screenNameInputIsActive ? 'input-container active' : 'input-container'}>
          <label htmlFor='screenNameInput' >Name </label>
          <input onFocus={handleFocus} onBlur={handleBlur} id='screenNameInput' type='text' onChange={handleUserChange} className={screenNameInputIsActive ? 'showUserPlaceholder' : 'hideUserPlaceholder'} placeholder='Enter Your Name' value={screenName} autocomplete='off'/>
        </div>
        <input onClick={handleClick} id='submitLogin' className='submitButton' type='submit' value={ `Enter ${ROOM_ID.slice(0, ROOM_ID.indexOf('--'))}`} />
      </form>
  );
};

export default LoginScreen;