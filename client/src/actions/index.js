export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  };
};

export const decrement = (num) => {
  return {
    type: 'DECREMENT',
    payload: num
  };
};

export const enter = () => {
  return {
    type: 'ENTER'
  };
};

export const exit = () => {
  return {
    type: 'EXIT'
  };
};

export const login = () => {
  return {
    type: 'LOGIN'
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const addToInvites = (k, val) => {
  return {
    type: 'ADDTOLIST',
    payload: {
      key: k,
      value: val
    }
  };
};

export const sendInvites = (list) => {
  return {
    type: 'SENDINVITES',
    payload: list
  };
};

export const createInvite = (char) => {
  return {
    type: 'CREATEINVITE',
    payload: char
  };
};

export const resetInvite = () => {
  return {
    type: 'RESETINVITE',
  };
};

export const addToNumberOfInvites = () => {
  return {
    type: 'ADDTONUMBEROFINVITES',
  };
};

export const resetNumberOfInvites = () => {
  return {
    type: 'RESETNUMBEROFINVITES',
  };
};

export const sendInvitesAndEnter = () => {
  return {
    type: 'INVITESENT',
  };
};

export const addVideo = (video, index) => {
  return {
    type: 'ADDVIDEO',
    payload: video,
    payload_index: index
  };
};

export const removeVideo = (video, index) => {
  return {
    type: 'REMOVEVIDEO',
    payload: video,
    payload_index: index
  };
};

export const toggleActiveScreenName = () => {
  return {
    type: 'TOGGLEACTIVESCREENNAME',
  };
};

export const toggleActivePassword = () => {
  return {
    type: 'TOGGLEACTIVEPASSWORD',
  };
};

export const updateScreenName = (update) => {
  return {
    type: 'UPDATESCREENNAME',
    payload: update
  };
};

export const updatePassword = (update) => {
  return {
    type: 'UPDATEPASSWORD',
    payload: update
  };
};

export const toggleActiveRoomNameInput = () => {
  return {
    type: 'TOGGLEACTIVEROOMNAMEINPUT',
  };
};

export const updateRoomName = (update) => {
  return {
    type: 'UPDATEROOMNAME',
    payload: update
  };
};

export const updateAddToList = (update) => {
  return {
    type: 'UPDATEADDTOLIST',
    payload: update
  };
};

export const toggleActiveAddToListInput = () => {
  return {
    type: 'TOGGLEACTIVEADDTOLISTINPUT',
  };
};

export const moveAvatarX = (delta) => {
  return {
    type: 'MOVEAVATARX',
    payload: delta
  };
};

export const moveAvatarY = (delta) => {
  return {
    type: 'MOVEAVATARY',
    payload: delta
  };
};

export const changeAvatar = (delta) => {
  return {
    type: 'CHANGEAVATAR',
    payload: delta
  };
};

export const assignUserId = (id) => {
  return {
    type: 'ASSIGNUSERID',
    payload: id
  };
};

export const createScreenName = (screenName) => {
  return {
    type: 'CREATESCREENNAME',
    payload: screenName
  };
};

export const updateAvatars = (avatars) => {
  return {
    type: 'UPDATEAVATARS',
    payload: avatars
  };
};