import React, { Component } from "react";

import PropTypes from "prop-types";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

import logo from "./logo.svg";

import "./App.css";

class App extends Component {
  render() {
    var user = {
      name: "Ramadan Jamalo",
      hobbies: ["Football", "PS4", "Basketball"]
    };
    return (
      <div className="head">
        <Header />

        <div className="App">
          <Home name={"RAmadan"} age={27} user={user}>
            <h3>This render it without props!</h3>
          </Home>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
