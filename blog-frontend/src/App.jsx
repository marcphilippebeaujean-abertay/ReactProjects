import React, { Component } from "react";
import NavBar from "./components/navBar";

import "./css/style.css";

import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
        </div>
      </Provider>
    );
  }
}

export default App;
