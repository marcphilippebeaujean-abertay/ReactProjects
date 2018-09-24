const defaultState = {
  dropdownShouldShow: false,
  exitedViaHover: true
};

const navigationReducer = (previousState = defaultState, action) => {
  let newState = { ...previousState };
  switch (action.type) {
    case "HIDE_DROPDOWN":
      newState.dropdownShouldShow = false;
      newState.exitedViaHover = action.exitedViaHover;
      break;
    case "SHOW_DROPDOWN":
      newState.dropdownShouldShow = true;
      break;
    case "ON_DROPDOWN_CLICKED":
      newState.exitedViaHover = true;
      break;
    default:
      break;
  }
  return newState;
};

export default navigationReducer;
