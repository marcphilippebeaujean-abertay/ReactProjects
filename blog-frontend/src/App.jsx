import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./css/style.css";

import store from "./store";
import { Provider } from "react-redux";
import PersistentContentComponent from "./components/persistentContent";
import MainBlogComponent from "./components/blogMain";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <PersistentContentComponent />
            <Route path="/" component={MainBlogComponent} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
