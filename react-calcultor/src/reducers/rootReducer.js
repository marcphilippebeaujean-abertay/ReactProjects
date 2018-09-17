const defaultState = {
  calcDisplay: "0", // last sum that was processed
  currentInputDisplay: "0", // displays the current input (an operation or a number in string form)
  currentOperator: "",
  lastInputWasOperation: true // input should be cleared when an operation is used
};

const numericInput = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(elem => elem.toString()); // these are types that are ALWAYS valid input
const operatorInput = ["-", "+", "/", "*", "=", "AC"];
const specialInput = [".", "0"];

const handleNumericInput = (previousState, number) => {
  let newState = { ...previousState };
  if (previousState.lastInputWasOperation) {
    newState.currentInputDisplay = number;
    newState.lastInputWasOperation = false;
  } else {
    newState.currentInputDisplay = previousState.currentInputDisplay + number;
  }
  return newState;
};

const rootReducer = (previousState = defaultState, action) => {
  if (action.type === "BUTTON_PRESSED") {
    if (numericInput.includes(action.data)) {
      return handleNumericInput(previousState, action.data);
    } else if (operatorInput.includes(action.data)) {
    } else if (specialInput.includes(action.data)) {
    } else {
      console.log("strang btn type: " + action.data);
    }
  } else {
    console.log("strange action type");
  }
};

export default rootReducer;
