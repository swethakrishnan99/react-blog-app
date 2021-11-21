import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

export default function SignIn(props) {
  return (
    <form className="inner-container" onSubmit={props.onSubmit}>
      <FontAwesomeIcon icon={faUserCircle} className="get-started-icon" />
      <input
        name="username"
        type="text"
        id="userName"
        className="get-started-input"
        placeholder="Username or email"
        required
        onChange={props.input}
      />
      <FontAwesomeIcon icon={faUnlockAlt} className="get-started-icon" />
      <input
        name="password"
        type="password"
        className="get-started-input"
        placeholder="Password"
        onChange={props.input}
      />
      <button type="submit" className="get-started-btn" id="submit">
        Sign In
      </button>
    </form>
  );
}
