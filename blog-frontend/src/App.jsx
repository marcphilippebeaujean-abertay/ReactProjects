import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./css/style.css";

import store from "./store";
import { Provider } from "react-redux";
import PersistentContentComponent from "./components/persistentContent";
import MainBlogComponent from "./components/blogMain";
import SheTown from "./components/Page Content/sheTown";
import ContactComponent from "./components/Page Content/contact";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route path="/" component={PersistentContentComponent} />
            <div className="page-content">
              <Route path="/" exact component={MainBlogComponent} />
              <Route path="/she-town" component={SheTown} />
              <Route path="/contact" component={ContactComponent} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
