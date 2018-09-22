import React, { Component } from "react";
import "../css/style.css";
export default class BlogPost extends Component {
  render() {
    return (
      <div className="blog-post-div">
        <div className="blog-post-header-div">
          <h2 className="blog-post-header">Hello World!</h2>
          <p className="blog-date">
            Published <time>22 September, 2018</time>
          </p>
        </div>
      </div>
    );
  }
}
