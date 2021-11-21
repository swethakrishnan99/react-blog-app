import React from "react";
import ArticleBox2 from "../../../common/ArticleBox2/ArticleBox2";
import NewsProvider from "../../../common/News";
import { useContext } from "react";

export default function TopPosts() {
  const newsArray = useContext(NewsProvider);

  return (
    <div>
      {newsArray
        .filter((news, index) => index < 5)
        .map((news, index) => (
          <ArticleBox2 news={news} key={index} index={index + 1} />
        ))}
    </div>
  );
}
