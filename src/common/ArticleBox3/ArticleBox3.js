import React from "react";
import "./ArticleBox3.css";
import { useHistory } from "react-router-dom";

export default function ArticleBox3(props) {
  const { title, content, category, id } = props.news;
  const { push } = useHistory();
  const handleClick = () => {
    push(`/home/${id}`);
  };
  return (
    <div
      className={
        (id + 1) % 3 === 0
          ? "articleBox3 flex-column middle-border"
          : "articleBox3 flex-column"
      }
      onClick={handleClick}
    >
      <p className="article3-title">{title}</p>
      <p className="article3-para">{content}</p>
      <p className="article3-subtitle">
        <span className="black">{category}</span>/ Nov 19 2021
      </p>
    </div>
  );
}
