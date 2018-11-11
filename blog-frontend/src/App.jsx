import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./css/style.css";

import store from "./store";
import { Provider } from "react-redux";
import PersistentContentComponent from "./components/persistentContent";
import MainBlogComponent from "./components/blogMain";
import SheTown from "./components/Page Content/sheTown";
import ReactCalculator from "./components/Page Content/react-calculator/calculatorLayoutComponent";
import ContactComponent from "./components/Page Content/contact";
import AboutInfoBar from "./components/Page Content/aboutInfoBar";
import Projects from "./components/Page Content/projects";
import MobileNavOptionsOverlay from "./components/Navigation Bar/mobileNavOptionsMenu";
import GameJamInfoPage from "./components/Page Content/gameJamPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div id="content-bg">
              <Route path="/" component={PersistentContentComponent} />
              <div className="page-content">
                <div id="nav-div-whitespace" />
                <MobileNavOptionsOverlay />
                <Route path="/" exact component={MainBlogComponent} />
                <Route path="/she-town" component={SheTown} />
                <Route path="/projects" component={Projects} />
                <Route path="/react-calculator" component={ReactCalculator} />
                <Route path="/contact" component={ContactComponent} />
                <Route path="/game-jams" component={GameJamInfoPage} />
                <div id="extra-space" />
              </div>
              <div id="right-info-sidebar">
                <div id="nav-div-whitespace" />
                <Route path="/" component={AboutInfoBar} />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
