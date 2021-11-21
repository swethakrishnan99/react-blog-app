import React from "react";
import "./ArticleBox4.css";
import { useHistory } from "react-router-dom";

export default function ArticleBox4(props) {
  const { push } = useHistory();
  const { news } = props;
  const handleClick = (id) => {
    push(`/home/${id}`);
  };
  return (
    <div
      className="articleBox4 flex-column"
      onClick={() => handleClick(news.id)}
    >
      <img src={news.image} alt="not found" className="article4-img" />
      <div>
        <span className="article4-title">{news.title}</span>
        <p className="article4-para">{news.content}</p>
        <span className="article4-subtitle">
          <span className="black">{news.category}</span>/ Nov 21 2021
        </span>
      </div>
    </div>
  );
}
