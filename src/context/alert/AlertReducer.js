const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      // console.log(action.payload)
      return action.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      return state;
  }
};

export default alertReducer;
