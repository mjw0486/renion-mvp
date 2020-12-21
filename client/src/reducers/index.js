import counterReducer from './counter.js';
import isLoggedInReducer from './isLoggedIn.js';
import inRoomReducer from './inRoom.js';
import inviteListReducer from './inviteList.js';
import newInviteReducer from './newInvite.js';
import numberOfInvitesReducer from './numberOfInvites.js';
import inviteSentReducer from './inviteSent.js';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
  counter: counterReducer,
  isLoggedIn: isLoggedInReducer,
  inRoom: inRoomReducer,
  inviteList: inviteListReducer,
  newInvite: newInviteReducer,
  numberOfInvites: numberOfInvitesReducer,
  inviteSent: inviteSentReducer
});

export default allReducer;