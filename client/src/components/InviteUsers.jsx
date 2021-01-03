import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToInvites, sendInvites, createInvite, addToNumberOfInvites, resetInvite, resetNumberOfInvites, sendInvitesAndEnter, toggleActiveRoomNameInput, updateRoomName, toggleActiveAddToListInput, updateAddToList } from '../actions';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const InviteUsers = function() {
  const history = useHistory();
  const dispatch = useDispatch();
  const inviteList = useSelector(state => state.inviteList);
  const newInvite = useSelector(state => state.newInvite);
  const numberOfInvites = useSelector(state => state.numberOfInvites);

  const handleCreateInvite = function(event) {
    event.preventDefault();
    dispatch(createInvite(event.target.value));
  }

  const handleAddToInvites = function(event) {
    event.preventDefault();
    dispatch(addToNumberOfInvites());
    dispatch(addToInvites(newInvite));
    dispatch(resetInvite());
  };
  const handleSendInvites = function(event) {
    event.preventDefault();
    console.log('inviteList!!: ', inviteList);
    dispatch(resetNumberOfInvites());
    dispatch(sendInvites());
    dispatch(sendInvitesAndEnter());
    axios({
      method: 'post',
      url: '/:room/emailInvites',
      data: {
        inviteList: inviteList,
        url: `http://localhost:3000/room/`
      }
    })
    .then((response)=> {
      console.log('response: ', response);
      // history.push(`/room/${ROOM_ID}`);
    });
  }

  const handleFocus = function(event) {
    event.preventDefault();
    if (event.target.id === 'roomNameInput' && !event.target.value) {
      dispatch(toggleActiveRoomNameInput());
    } else if (event.target.id === 'addToListInput' && !event.target.value) {
      dispatch(toggleActiveAddToListInput());
    }
  }
  const handleBlur = function(event) {
    event.preventDefault();
    if (event.target.id === 'roomNameInput' && !event.target.value) {
      dispatch(toggleActiveRoomNameInput());
    } else if (event.target.id === 'addToListInput' && !event.target.value) {
      dispatch(toggleActiveAddToListInput());
    }
  }
  const handleRoomNameChange = function(event) {
    event.preventDefault();
    dispatch(updateRoomName(event.target.value));
  }

  const handleAddToListChange = function(event) {
    event.preventDefault();
    dispatch(updateAddToList(event.target.value));
  }

  const handleAddToListClick = function(event) {
    event.preventDefault();
    console.log(numberOfInvites, addToList);
    dispatch(addToInvites(numberOfInvites, addToList));
    dispatch(addToNumberOfInvites())
    dispatch(updateAddToList(''));
    dispatch(toggleActiveAddToListInput());
    console.log(addToList);
  }

  const username = useSelector(state => state.username);
  const roomNameInputIsActive = useSelector(state => state.roomNameInputIsActive);
  const roomName = useSelector(state => state.roomName);
  const addToListInputIsActive = useSelector(state => state.addToListInputIsActive);
  const addToList = useSelector(state => state.addToList);

  return (
    <div>
      {Object.keys(inviteList).map((key) => {
        return(
          <h1>{key}</h1>
        )
      })}
      <form id='inviteForm'>
        <div id='inviteHeader'>
          <h1 id='logo'>Reunion</h1>
          <h1 id='subTitle'>{username}'s Invite List</h1>
        </div>
        <div id='inviteList'>
          {Object.entries(inviteList).map(([key, value]) => {
            return (
              <span>{value.slice(0, value.indexOf('@'))}<br /></span>
            )
            console.log('key, value: ', key, value);
          })}
        </div>

        <div id='addToList' className={addToListInputIsActive ? 'input-container active' : 'input-container'}>
          <label htmlFor='addToListInput'>Add To List</label>
          <input onFocus={handleFocus} onBlur={handleBlur} id='addToListInput' type='text' onChange={handleAddToListChange} className={addToListInputIsActive ? 'showAddToListPlaceholder' : 'hideAddToListPlaceholder'} placeholder='Enter Email Address' value={addToList} autocomplete='off'/>
          <button onClick={handleAddToListClick}type='submit' className={(/^[a-zA-Z0-9_\-\.]+[@][a-zA-Z0-9_\-\.]+[\.][a-zA-Z]{2,5}$/).exec(addToList) ? 'showButton' : 'hideButton'}>Add To List</button>
        </div>

        <div id='roomName' className={roomNameInputIsActive ? 'input-container active' : 'input-container'}>
          <label htmlFor='roomNameInput'>Room Name</label>
          <input onFocus={handleFocus} onBlur={handleBlur} id='roomNameInput' type='text' onChange={handleRoomNameChange} className={roomNameInputIsActive ? 'showRoomNamePlaceholder' : 'hideRoomNamePlaceholder'} placeholder='Enter Room Name' value={roomName} autocomplete='off'/>
        </div>
        <input onClick={handleSendInvites} type='submit' value='Send Invites and Enter Room' id='submitInvites' className='submitButton' />
      </form>
    </div>
  )
}

export default InviteUsers;