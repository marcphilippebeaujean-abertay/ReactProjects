import React, { Component } from "react";
import NavBar from "./components/navBar";

import "./css/style.css";

import store from "./store";
import { Provider } from "react-redux";
import BlogPost from "./components/blogPost";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <BlogPost />
        </div>
      </Provider>
    );
  }
}

export default App;
