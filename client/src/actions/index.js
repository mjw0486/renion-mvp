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

export const addToInvites = (name) => {
  return {
    type: 'ADDTOLIST',
    payload: name
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