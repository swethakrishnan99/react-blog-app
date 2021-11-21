import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

export default function SignIn(props) {
  const updateInput = () => {};
  return (
    <form className="inner-container">
      <FontAwesomeIcon icon={faUserCircle} className="get-started-icon" />
      <input
        name="userName"
        type="text"
        id="userName"
        className="get-started-input"
        placeholder="Username or email"
        required
        onChange={updateInput}
      />
      <FontAwesomeIcon icon={faUnlockAlt} className="get-started-icon" />
      <input
        name="password"
        type="password"
        id="password"
        className="get-started-input"
        placeholder="Password"
        onChange={updateInput}
        required
      />
      <button
        type="submit"
        className="get-started-btn"
        id="submit"
        onClick={props.goHome}
      >
        Sign In
      </button>
    </form>
  );
}
