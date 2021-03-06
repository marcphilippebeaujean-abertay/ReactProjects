const defaultState = {
  calcDisplay: "0", // last sum that was processed
  currentInputDisplay: "0", // displays the current input (an operation or a number in string form)
  currentOperator: "",
  lastInputWasOperation: true, // input should be cleared when an operation is used
  currentSum: "",
  resetPending: false
};

const numericInput = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(elem => elem.toString()); // these are types that are ALWAYS valid input
const operatorInput = ["-", "+", "/", "*"];
const specialInput = [".", "0", "=", "AC"];

const handleNumericInput = (previousState, number) => {
  let newState = { ...previousState };
  if (previousState.lastInputWasOperation) {
    newState.currentInputDisplay = number;
    newState.lastInputWasOperation = false;
  } else {
    newState.currentInputDisplay = previousState.currentInputDisplay + number;
  }
  if (previousState.calcDisplay === "0" || previousState.resetPending) {
    newState.calcDisplay = number;
    newState.resetPending = false;
  } else {
    newState.calcDisplay = previousState.calcDisplay + number;
  }
  newState.lastInputWasOperation = false;
  return newState;
};

const handleCalculationOperation = (numA, numB, operator) => {
  let nrA = Number(numA);
  let nrB = Number(numB);
  let ttl = 0;
  switch (operator) {
    case "-":
      ttl = nrA - nrB;
      break;
    case "+":
      ttl = nrA + nrB;
      break;
    case "/":
      ttl = nrA / nrB;
      break;
    case "*":
      ttl = nrA * nrB;
      break;
    default:
      console.log("strange operator used for calculation!");
      break;
  }
  return ttl.toString();
};

const handleOperatorInput = (previousState, operator) => {
  let newState = { ...previousState };
  if (previousState.lastInputWasOperation === false) {
    // dont allow consecutive operators
    newState.lastInputWasOperation = true;
    newState.currentInputDisplay = operator;
    newState.currentOperator = operator;
    // Assign number state variables used for calculations
    if (previousState.currentSum === "") {
      newState.currentSum = previousState.currentInputDisplay;
    } else {
      let curSum = handleCalculationOperation(
        previousState.currentSum,
        previousState.currentInputDisplay,
        previousState.currentOperator
      );
      newState.currentSum = curSum;
      newState.calcDisplay = curSum;
    }
    newState.calcDisplay = newState.calcDisplay + operator;
  }
  return newState;
};

const handleSpecialInput = (previousState, sign) => {
  let newState = { ...previousState };
  switch (sign) {
    case "AC":
      newState = defaultState;
      break;
    case "=":
      if (
        previousState.lastInputWasOperation === false &&
        previousState.currentOperator !== ""
      ) {
        let finalSum = handleCalculationOperation(
          previousState.currentSum,
          previousState.currentInputDisplay,
          previousState.currentOperator
        );
        newState.currentSum = "";
        newState.calcDisplay = previousState.calcDisplay + sign + finalSum;
        newState.currentInputDisplay = finalSum;
        newState.lastInputWasOperation = true;
        newState.resetPending = true;
      }
      break;
    case "0":
      if (previousState.currentInputDisplay[0] !== "0") {
        newState = handleNumericInput(previousState, "0");
      }
      break;
    case ".":
      if (!previousState.currentInputDisplay.includes(".")) {
        newState = handleNumericInput(previousState, ".");
      }
      break;
    default:
      console.log("strange special input provided");
      break;
  }
  return newState;
};

const rootReducer = (previousState = defaultState, action) => {
  if (action.type === "BUTTON_PRESSED") {
    if (numericInput.includes(action.data)) {
      return handleNumericInput(previousState, action.data);
    } else if (operatorInput.includes(action.data)) {
      return handleOperatorInput(previousState, action.data);
    } else if (specialInput.includes(action.data)) {
      return handleSpecialInput(previousState, action.data);
    } else {
      console.log("strange btn type: " + action.data);
    }
  }
  return previousState;
};

export default rootReducer;
