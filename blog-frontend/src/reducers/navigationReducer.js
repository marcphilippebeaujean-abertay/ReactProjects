const defaultState = {
  currentURL: "home"
};

const navigationReducer = (previousState = defaultState, action) => {
  let newState = { ...previousState };
  switch (action.type) {
    default:
      break;
  }
  return newState;
};

export default navigationReducer;
