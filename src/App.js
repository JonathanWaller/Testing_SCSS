import React, { Component } from "react";
import logo from "./logo.svg";
import First from "./components/First/First";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <First />
      </div>
    );
  }
}

export default App;
