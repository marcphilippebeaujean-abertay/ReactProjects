export const moneyRegex = new RegExp(/\.(.*)/); // matches everything after "."

export const convertNumToBalance = num => {
  let balanceString = num.toString();
  let regexMatch = balanceString.match(moneyRegex); // matches everything after "."
  if (regexMatch !== null) {
    console.log(regexMatch[1].length);
  }
  if (regexMatch === null) {
    balanceString += ".00";
  } else if (regexMatch[1].length === 1) {
    balanceString += "0";
  } else {
    if (regexMatch[1].length !== 2) {
      console.log("strange balance regex result!");
    }
  }
  return balanceString + "£";
};
