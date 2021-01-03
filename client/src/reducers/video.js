const videoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDVIDEO':
      return [...state, action.payload];
    case 'REMOVEVIDEO':
      return [...state.slice(0, action.payload_index), ...state.slice(action.payload_index + 1)];
    default:
      return state;
  };
};

export default videoReducer;