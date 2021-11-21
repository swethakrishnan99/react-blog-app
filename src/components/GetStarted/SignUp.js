import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export default function SignUp(props) {
  const updateInput = () => {};
  return (
    <form className="inner-container">
      <FontAwesomeIcon icon={faUserCircle} className="get-started-icon" />
      <input
        name="userName"
        type="text"
        id="userName"
        className="get-started-input"
        placeholder="Name"
        onChange={updateInput}
        required
      />
      <FontAwesomeIcon icon={faEnvelopeSquare} className="get-started-icon" />
      <input
        name="email"
        type="email"
        id="email"
        className="get-started-input"
        placeholder="email"
        onChange={updateInput}
        required
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
        Sign Up
      </button>
    </form>
  );
}
