import React, { useContext, useState } from "react";
import ArticleBox1 from "../../common/ArticleBox1/ArticleBox1";
import Title from "../../common/Title/Title";
import NewsProvider from "../../common/News";
import { useParams, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ArticleBox2 from "../../common/ArticleBox2/ArticleBox2";
import AddBox from "../../common/AddBox";
import "./CategoryPage.css";
import NotFound from "../NotFound/NotFound";

export default function Category() {
  const newsArray = useContext(NewsProvider);
  const [ending, setEnding] = useState(5);
  const { category } = useParams();

  const { push } = useHistory();
  const loadMore = () => {
    if (ending >= categoryNews.length) return;
    setEnding((prevState) => prevState + 5);
  };
  const categoryNews = newsArray.filter((news) => news.category === category);
  console.log(categoryNews.length);
  if (categoryNews.length === 0) {
    push("/not-found");
  }

  return (
    <div className="flex-row page2">
      <div className="flex-column column1">
        <Title title={category} />
        {categoryNews.slice(0, ending).map((news, index) => (
          <ArticleBox1 news={news} key={index} />
        ))}
        {ending < categoryNews.length ? (
          <FontAwesomeIcon
            icon={faArrowDown}
            onClick={loadMore}
            className="btn-load-more load-more"
          />
        ) : (
          <span className="subtitle">End</span>
        )}
      </div>
      <div className="flex-column">
        <Title title={"Top Posts"} />
        {categoryNews.slice(0, 3).map((news, index) => (
          <ArticleBox2 news={news} key={index} index={index + 1} />
        ))}
        <AddBox />
      </div>
    </div>
  );
}
