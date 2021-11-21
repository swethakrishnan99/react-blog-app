import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class GetStartBtn extends Component {
  goToLogin = () => {
    this.props.history.push("/get-start");
  };
  render() {
    return (
      <button className="float-right signup" onClick={this.goToLogin}>
        Get Started
      </button>
    );
  }
}
export default withRouter(GetStartBtn);
