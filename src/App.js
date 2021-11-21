import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";

export default class App extends Component {
  state = { showNav: true, login: true, username: "", password: "" };
  toggleNav = () => {
    this.setState((prevState) => ({ showNav: !prevState.showNav }));
  };

  render() {
    return (
      <div>
        {this.state.showNav && <NavBar appState={this.state} />}
        <Main toggleNav={this.toggleNav} />
      </div>
    );
  }
}
