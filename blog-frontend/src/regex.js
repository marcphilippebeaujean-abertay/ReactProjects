const emailRegex = new RegExp(
  /(?!.*[\s])(?!.*[A-Z])[a-z]+([.][a-z]+)?[@][\w]+[.][a-z]+/
);

export { emailRegex };
