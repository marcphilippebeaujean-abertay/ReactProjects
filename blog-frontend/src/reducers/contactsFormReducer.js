const defaultState = {
  emailForm: "",
  nameForm: "",
  messageForm: ""
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
      break;
    default:
      console.log("unrecognised action type");
      break;
  }
  return newState;
};

export default contactsFormReducer;
