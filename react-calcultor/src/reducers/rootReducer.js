const defaultState = {
  calcDisplay: "0", // last sum that was processed
  currentInputDisplay: "0", // displays the current input (an operation or a number in string form)
  currentOperator: "",
  lastInputWasOperation: true, // input should be cleared when an operation is used
  currentSum: ""
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
  if (previousState.calcDisplay === "0") {
    newState.calcDisplay = number;
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
  let madeCalculation = false;
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
    madeCalculation = true;
  }
  newState.calcDisplay = newState.calcDisplay + operator;
  return newState;
};

const rootReducer = (previousState = defaultState, action) => {
  if (action.type === "BUTTON_PRESSED") {
    if (numericInput.includes(action.data)) {
      return handleNumericInput(previousState, action.data);
    } else if (operatorInput.includes(action.data)) {
      return handleOperatorInput(previousState, action.data);
    } else if (specialInput.includes(action.data)) {
    } else {
      console.log("strang btn type: " + action.data);
    }
  } else {
    console.log("strange action type");
  }
  return previousState;
};

export default rootReducer;
