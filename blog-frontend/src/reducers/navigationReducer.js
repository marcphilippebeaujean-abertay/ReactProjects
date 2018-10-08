const defaultState = {
  dropdownShouldShow: false,
  exitedViaHover: true,
  curSidebarHovered: ""
};

const navigationReducer = (previousState = defaultState, action) => {
  let newState = { ...previousState };
  newState.curSidebarHovered = "";
  switch (action.type) {
    case "HIDE_DROPDOWN":
      newState.dropdownShouldShow = false;
      newState.exitedViaHover = action.exitedViaHover;
      break;
    case "SHOW_DROPDOWN":
      newState.dropdownShouldShow = true;
      newState.exitedViaHover = true;
      break;
    case "SIDEBAR_CATEGORY_UNHOVERED":
      if (previousState.curSidebarHovered === action.sidebarId) {
        newState.curSidebarHovered = "";
      }
      break;
    case "SIDEBAR_CATEGORY_HOVERED":
      newState.curSidebarHovered = action.curSidebarHovered;
      break;
    default:
      break;
  }
  return newState;
};

export default navigationReducer;
