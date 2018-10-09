const defaultState = {
  contentToDisplay: {
    aboutInfo: false
  }
};

const contentReducer = (previousState = defaultState, action) => {
  let newState = { ...previousState };
  switch (action.type) {
    case "TOGGLE_CONTENT":
      if (newState.contentToDisplay.hasOwnProperty(action.contentId)) {
        newState.contentToDisplay[action.contentId] = !previousState
          .contentToDisplay[action.contentId];
      } else {
        console.log(`Missing action content id: ${action.contentId}`);
      }
      break;
    default:
      break;
  }
  return newState;
};

export default contentReducer;
