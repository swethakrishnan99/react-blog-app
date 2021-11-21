import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default class NotFound extends Component {
  componentDidMount() {
    this.props.toggleNav();
  }
  componentWillUnmount() {
    this.props.toggleNav();
  }
  render() {
    return (
      <div className="flex-column not-found">
        <h1 className="not-found-tittle">Page Not Found</h1>
        <Link to="home">Go to Home Page</Link>
      </div>
    );
  }
}
