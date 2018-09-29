const emailRegex = new RegExp(
  /(?=.{7,})(?!.*[\s])(?!.*[A-Z])[a-z]+([.][a-z]+)?[@][\w]+[.][a-z]+([.][a-z]+)?$/
);

const nameRegex = new RegExp(
  /(?=.{6,})(?!.*[\W])(?!.*[\s][\s])([A-Z][a-z]+[\s]){2,}/
);

export { emailRegex, nameRegex };
