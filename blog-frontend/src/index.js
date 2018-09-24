import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const shouldntBeMobile = true;

export { shouldntBeMobile };

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
