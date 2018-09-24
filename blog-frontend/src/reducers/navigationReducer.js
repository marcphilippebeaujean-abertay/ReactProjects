const defaultState = {
  dropdownShouldShow: false
};

const navigationReducer = (previousState = defaultState, action) => {
  let newState = { ...previousState };
  switch (action.type) {
    case "HIDE_DROPDOWN":
      newState.dropdownShouldShow = false;
      break;
    case "SHOW_DROPDOWN":
      newState.dropdownShould = true;
      break;
    default:
      break;
  }
  return newState;
};

export default navigationReducer;
