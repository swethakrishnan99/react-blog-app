import React from "react";
import { useState, useContext } from "react";
import ArticleBox1 from "../../../common/ArticleBox1/ArticleBox1";
import NewsProvider from "../../../common/News";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function LatestArticles() {
  const [starting, setStarting] = useState(0);
  const [ending, setEnding] = useState(5);
  const newsArray = useContext(NewsProvider);
  const loadMore = (e) => {
    if (ending >= newsArray.length) {
      return;
    }
    setStarting((prevState) => prevState + 5);
    setEnding((prevState) => prevState + 5);
  };
  return (
    <>
      {newsArray.slice(starting, ending).map((news, index) => (
        <ArticleBox1 news={news} key={index} />
      ))}
      <button className="btn-load-more" onClick={loadMore}>
        {ending < newsArray.length ? (
          <FontAwesomeIcon icon={faArrowDown} className="load-more" />
        ) : (
          <p>The end</p>
        )}
      </button>
    </>
  );
}
