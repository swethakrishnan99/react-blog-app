import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import { withRouter } from "react-router-dom";

class App extends Component {
  state = {
    showNav: true,
    login: true,
    login: false,
    username: "",
    password: "",
    email: "",
  };
  toggleNav = () => {
    this.setState((prevState) => ({ showNav: !prevState.showNav }));
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    if (this.state.username && this.state.password) {
      this.setState((prevState) => ({ login: !prevState.login }));
      e.preventDefault();
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div>
        {this.state.showNav && <NavBar login={this.state.login} />}
        <Main
          toggleNav={this.toggleNav}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default withRouter(App);
