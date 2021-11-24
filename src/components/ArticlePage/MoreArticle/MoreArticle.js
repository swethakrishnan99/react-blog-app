import React from "react";
import NewsProvider from "../../../common/News";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function MoreArticle(props) {
  const {
    currentNews: { category, id },
  } = props;
  const { push } = useHistory();
  const handleClick = (id) => {
    push(`/home/${id}`);
    window.scrollTo(0, 0);
  };
  const newsArray = useContext(NewsProvider);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="more-article">
      <p>More From The Siren</p>
      <div className="flex-row">
        {newsArray
          .filter((news) => news.category === category && news.id !== id)
          .slice(0, 3)
          .map((news, index) => (
            <div
              className="flex-column1 article"
              key={index}
              onClick={() => handleClick(news.id)}
            >
              <p className="subtitle">Related Reads</p>
              <img
                src={news.image}
                alt="not found"
                className="more-article-img"
              />
              <div className="flex-column">
                <p className="more-article-title">{news.title}</p>
                <div className="flex-row flex-start">
                  <img
                    src={props.Profile}
                    alt="profile not found"
                    className="profile-article"
                  />
                  <div>
                    <p className="profile-name-article margin">
                      Dmitry Nozhdnko
                    </p>
                    <p className="subtitle">Nov 19, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
