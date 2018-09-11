import React, { Component } from "react";
import "./App.css";
import store from "./Store.js";
import "./components/FormComponent.jsx";
import FormComponent from "./components/FormComponent.jsx";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FormComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
