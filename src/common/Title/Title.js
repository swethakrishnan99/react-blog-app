import React from "react";
import "./Title.css";

export default function Title(props) {
  const { title } = props;
  return (
    <div className="article-headingDiv">
      <p className="article-heading">{title}</p>
      <hr />
      <br />
    </div>
  );
}
