const defaultState = {
  currentURL: "home",
  dropDownHoveredList: []
};

const navigationReducer = (previousState = defaultState, action) => {
  let newState = { ...previousState };
  switch (action.type) {
    case "DROPDOWN_HOVER":
      let newHoverArr = [
        ...previousState.dropDownHoveredList,
        action.data.hoverLink
      ];
      newState.dropDownHoveredList = newHoverArr;
      console.log(newState.dropDownHoveredList);
      break;
    case "DROPDOWN_END":
      let indexToRemove = newState.dropDownHoveredList.indexOf(
        action.data.hoverLink
      );
      if (indexToRemove >= 0) {
        newState.dropDownHoveredList = [
          ...previousState.dropDownHoveredList.slice(0, indexToRemove),
          ...previousState.dropDownHoveredList.slice(indexToRemove + 1)
        ];
      } else {
        console.log("called end hover although element is not in array");
      }
      break;
    default:
      console.log("Strange navigation reducer action");
      break;
  }
  return newState;
};

export default navigationReducer;
