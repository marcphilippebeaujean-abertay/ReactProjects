const defaultState = {
  currentProduct: 0, // stores the current product of operations
  previousCalcDisplay: "0", // last sum that was processed
  currentInputDisplay: "0", // displays the current input (an operation or a number in string form)
  lastInputWasOperation: true // input should be cleared when an operation is used
};

const numericTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(elem => elem.toString()); // these are types that are ALWAYS valid input

const rootReducer = (previousState = defaultState, action) => {
  let newState = { ...previousState };
  switch (action.type) {
    case "BUTTON_PRESSED":
      console.log(action.data);
      break;
  }
  return newState;
};

export default rootReducer;
