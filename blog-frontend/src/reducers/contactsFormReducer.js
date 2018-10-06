import { emailRegex, nameRegex } from "../regex";

const minMessageLength = 10;

const formState = {
  formInput: "",
  showError: false
};

const defaultState = {
  emailForm: "",
  nameForm: "",
  messageForm: "",
  subjectForm: "",
  emailErrorMsg: "",
  nameErrorMsg: "",
  messageErrorMsg: "",
  forms: {
    nameForm: formState,
    emailForm: formState
  }
};

const validInputCheck = previousState => {
  let newState = { ...previousState };
  let validInput = true;
  if (!previousState.emailForm.match(emailRegex)) {
    newState.emailErrorMsg = "This E-Mail is looking strange...";
    validInput = false;
  }
  if (previousState.nameForm.length < 6) {
    newState.nameErrorMsg = "Please enter at least 6 digits";
    validInput = false;
  }
  if (previousState.messageForm.length < minMessageLength) {
    newState.messageErrorMsg = `Please enter at least ${minMessageLength} characters`;
  }
  // TODO: Send off http data containing email info

  if (validInput) {
    // Reset the form
    newState.emailForm = "";
    newState.messageForm = "";
    newState.nameForm = "";
    newState.subjectForm = "";
  }
  return newState;
};

const contactsFormReducer = (previousState = defaultState, action) => {
  let newState = { ...previousState };
  switch (action.type) {
    case "FORM_INPUT_UPDATE":
      newState.forms[action.formId].formInput = action.formInput;
      break;
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
