import { emailRegex, nameRegex } from "../regex";

const minMessageLength = 10;

const defaultState = {
  emailForm: "",
  nameForm: "",
  messageForm: "",
  emailErrorMsg: "",
  nameErrorMsg: "",
  messageErrorMsg: ""
};

const validInputCheck = previousState => {
  let newState = { ...previousState };
  let validInput = true;
  if (previousState.emailForm.match(emailRegex)) {
    newState.emailErrorMsg = "";
  } else {
    newState.emailErrorMsg =
      "This E-Mail is looking strange...please make sure its correct!";
    validInput = false;
  }
  if (previousState.nameForm.match(nameRegex)) {
    newState.nameErrorMsg = "";
  } else {
    newState.nameErrorMsg = "Please enter your full name";
    validInput = false;
  }
  if (previousState.messageForm.length >= minMessageLength) {
    newState.messageErrorMsg = "";
  } else {
    newState.messageErrorMsg = `Please enter at least ${minMessageLength} characters`;
  }
  if (validInput) {
    // Reset the form
    newState.emailForm = "";
    newState.messageForm = "";
    newState.nameForm = "";
  }
  return newState;
};

const contactsFormReducer = (previousState = defaultState, action) => {
  let newState = { ...previousState };
  switch (action.type) {
    case "EMAIL_FORM_UPDATE":
      newState.emailForm = action.data;
      break;
    case "NAME_FORM_UPDATE":
      newState.nameForm = action.data;
      break;
    case "MESSAGE_FORM_UPDATE":
      newState.messageForm = action.data;
      break;
    case "FORM_SUBMIT_ATTEMPT":
      newState = validInputCheck(previousState);
      break;
    default:
      break;
  }
  return newState;
};

export default contactsFormReducer;
