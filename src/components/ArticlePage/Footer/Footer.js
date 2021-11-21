import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import Profile from "../man.png";

export default function Footer() {
  return (
    <>
      <div className="tags">
        <span>Tag1</span>
        <span>Tag2</span>
        <span>Tag3</span>
      </div>
      <p className="subtitle float-left">
        <FontAwesomeIcon icon={faThumbsUp} /> 9.3K Likes
      </p>
      <div className="flex-row1 border">
        <img src={Profile} alt="profile not found" className="profile" />
        <div>
          <p className="subtitle">Written by</p>
          <p className="profile-name margin">Dmitry Nozhdnko</p>
          <p className="subtitle">Nov 19, 2021 - 10 min read</p>
        </div>
      </div>
    </>
  );
}
