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
        <div className="first__text">
          Testing...my name is {this.state.name}
        </div>
      </div>
    );
  }
}

export default First;
