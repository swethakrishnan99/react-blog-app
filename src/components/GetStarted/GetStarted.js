import React, { Component } from "react";
import "./GetStarted.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SiteLogo from "../../common/SiteLogo";
import { withRouter } from "react-router-dom";

class GetStarted extends Component {
  state = { signIn: true };
  componentDidMount() {
    this.props.toggleNav();
  }
  componentWillUnmount() {
    this.props.toggleNav();
  }
  toggleSignInPage = () =>
    this.setState((prevState) => ({
      signIn: !prevState.signIn,
    }));
  render() {
    return (
      <div className="get-started-page flex-row">
        <div className="get-started-container" id="signin">
          <div className="flex-column2">
            <div className="flex-row1 btns-container">
              <button
                id="onSignIn"
                disabled={this.state.signIn}
                onClick={this.toggleSignInPage}
              >
                SignIn
              </button>
              <button
                id="onSignUp"
                disabled={!this.state.signIn}
                onClick={this.toggleSignInPage}
              >
                SignUp
              </button>
            </div>
            <SiteLogo />
          </div>
          {this.state.signIn ? (
            <SignIn
              input={this.props.onChange}
              onSubmit={this.props.onSubmit}
            />
          ) : (
            <SignUp
              input={this.props.onChange}
              onSubmit={this.props.onSubmit}
            />
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(GetStarted);
