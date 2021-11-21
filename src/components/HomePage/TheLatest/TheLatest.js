import React from "react";
import ArticleBox4 from "../../../common/ArticleBox4/ArticleBox4";
import NewsProvider from "../../../common/News";
import { useContext } from "react";

export default function TheLatest() {
  const LatestNews = useContext(NewsProvider);

  return (
    <div className="theLatest-box flex-row">
      <ArticleBox4 news={LatestNews[1]} />
      <ArticleBox4 news={LatestNews[24]} />
      <ArticleBox4 news={LatestNews[34]} />
    </div>
  );
}
