import React, { Component } from "react";
import "./First.scss";

class First extends Component {
  constructor() {
    super();
    this.state = {
      name: "Benny"
    };
  }

  render() {
    return (
      <div>
        <nav>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
        <h1>SCSS Practice</h1>
        <div className="first__text">
          Testing...my name is {this.state.name}
        </div>
        <a>Click here</a>
      </div>
    );
  }
}

export default First;
