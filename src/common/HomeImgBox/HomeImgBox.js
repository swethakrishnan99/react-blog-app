import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./HomeImgBox.css";

import NewsProvider from "../News";

export default function HomeImgBox() {
  const news = useContext(NewsProvider);
  const { title, category, image, id } = news[24];
  const background = { background: `url(${image})` };
  const { push } = useHistory();
  const handleClick = () => {
    push(`/home/${id}`);
  };
  return (
    <div
      className="HomeImgBox flex-column"
      style={background}
      onClick={handleClick}
    >
      <span className="HomeImgBox-title">{title}</span>
      <span className="HomeImgBox-subtitle">{category} / August 21 2017</span>
    </div>
  );
}
