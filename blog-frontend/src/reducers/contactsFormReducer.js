import { emailRegex } from "../regex";

const defaultState = {
  emailForm: "",
  nameForm: "",
  messageForm: ""
};

const validInputCheck = emailInput => {
  if (emailInput.match(emailRegex)) {
    console.log("valid email!");
  } else {
    console.log("invalid email!");
  }
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
      validInputCheck(newState.emailForm);
      break;
    default:
      break;
  }
  return newState;
};

export default contactsFormReducer;
