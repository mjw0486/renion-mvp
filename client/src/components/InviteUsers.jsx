import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToInvites, sendInvites, createInvite, addToNumberOfInvites, resetInvite, resetNumberOfInvites, sendInvitesAndEnter } from '../actions';

const InviteUsers = function() {
  const dispatch = useDispatch();
  const inviteList = useSelector(state => state.inviteList);
  const newInvite = useSelector(state => state.newInvite);

  const handleCreateInvite = function(event) {
    event.preventDefault();
    dispatch(createInvite(event.target.value));
  }

  const handleAddToInvites = function(event) {
    event.preventDefault();
    dispatch(addToNumberOfInvites())
    dispatch(addToInvites(newInvite))
    dispatch(resetInvite());
  };
  const handleSendInvites = function(event) {
    event.preventDefault();
    console.log(inviteList);
    dispatch(resetNumberOfInvites())
    dispatch(sendInvites())
    dispatch(sendInvitesAndEnter());
  }
  return (
    <React.Fragment>
      <form>
        <label>
          Who would you like to invite?
          <input onChange={handleCreateInvite} type='text' name='userInvite' />
        </label>
        <input onClick={handleAddToInvites} type='submit' value='Add to Invites' />
      </form>
      <input onClick={handleSendInvites} type='submit' value='Send Invites and Enter Room' />
    </React.Fragment>
  )
}

export default InviteUsers;