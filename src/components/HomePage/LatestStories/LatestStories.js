import React from "react";
import Article3 from "../../../common/ArticleBox3/ArticleBox3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import NewsProvider from "../../../common/News";
import { useContext, useState } from "react";

import "./LatestStories.css";

export default function LatestStories() {
  const newsArray = useContext(NewsProvider);
  const [starting, setStarting] = useState(0);
  const [ending, setEnding] = useState(3);
  const showMore = () => {
    if (ending >= newsArray.length) return;
    setStarting((prevState) => prevState + 3);
    setEnding((prevState) => prevState + 3);
  };
  return (
    <div className="latest-stories">
      <div className="flex-row top-bottom-border">
        {newsArray.slice(starting, ending).map((news, index) => (
          <Article3 news={news} key={index} />
        ))}
      </div>
      {ending < newsArray.length ? (
        <p onClick={showMore}>
          VIEW MORE
          <FontAwesomeIcon icon={faArrowRight} />
        </p>
      ) : (
        <p>END</p>
      )}
    </div>
  );
}
