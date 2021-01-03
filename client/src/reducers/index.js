import counterReducer from './counter.js';
import isLoggedInReducer from './isLoggedIn.js';
import inRoomReducer from './inRoom.js';
import inviteListReducer from './inviteList.js';
import newInviteReducer from './newInvite.js';
import numberOfInvitesReducer from './numberOfInvites.js';
import inviteSentReducer from './inviteSent.js';
import videoReducer from './video.js';
import screenNameInputIsActiveReducer from './screenNameInputIsActive.js';
import passwordIsActiveReducer from './passwordIsActive.js';
import passwordReducer from './passwordReducer.js';
import screenNameReducer from './screenNameReducer.js';
import roomNameInputIsActiveReducer from './roomNameInputIsActiveReducer.js';
import roomNameReducer from './roomNameReducer.js';
import updateAddToListReducer from './updateAddToListReducer.js';
import addToListInputIsActiveReducer from './addToListInputIsActiveReducer.js';
import avatarReducer from './avatarReducer.js';
import avatarNumberReducer from './avatarNumberReducer.js';
import avatarsReducer from './avatarsReducer.js';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
  isLoggedIn: isLoggedInReducer,
  screenNameInputIsActive: screenNameInputIsActiveReducer,
  screenName: screenNameReducer,
  avatarNumber: avatarNumberReducer,
  myAvatar: avatarReducer,
  avatars: avatarsReducer,
  videos: videoReducer
});

export default allReducer;