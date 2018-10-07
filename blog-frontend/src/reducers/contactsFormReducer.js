import { emailRegex, nameRegex } from "../regex";

const minMessageLength = 10;

const formState = {
  formInput: "",
  showError: false
};

const defaultState = {
  messageInput: "",
  messageErrorMsg: "",
  forms: {
    nameForm: { ...formState },
    emailForm: { ...formState },
    subjectForm: { ...formState }
  }
};

const validInputCheck = previousState => {
  let newState = { ...previousState };
  let invalidInput = false;
  for (let form in previousState.forms) {
    let formInput = previousState.forms[form].formInput;
    console.log(newState.forms[form]);
    switch (form) {
      case "nameForm":
        console.log(nameRegex.test(formInput));
        newState.forms[form].showError = !nameRegex.test(formInput);
        break;
      case "emailForm":
        newState.forms[form].showError = !emailRegex.test(formInput);
        break;
      default:
        break;
    }
    if (newState.forms[form].showError) {
      invalidInput = true;
    }
  }
  if (previousState.messageInput.length < minMessageLength) {
    newState.messageErrorMsg = `Please enter at least ${minMessageLength} characters`;
    invalidInput = true;
  }
  if (invalidInput === false) {
    newState.messageErrorMsg = "";
    for (let form in previousState.forms) {
      newState.forms[form].formInput = "";
    }
  }
  return newState;
};

const contactsFormReducer = (previousState = defaultState, action) => {
  let newState = { ...previousState };
  switch (action.type) {
    case "FORM_INPUT_UPDATE":
      newState.forms[action.formId].formInput = action.formInput;
      break;
    case "MESSAGE_FORM_UPDATE":
      newState.messageInput = action.data;
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
