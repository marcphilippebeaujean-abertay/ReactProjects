import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/quoterender";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
