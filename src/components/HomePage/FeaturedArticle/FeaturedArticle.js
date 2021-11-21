import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import NewsProvider from "../../../common/News";
import "./FeaturedArticle.css";

export default function FeaturedArticle() {
  const news = useContext(NewsProvider);
  const { push } = useHistory();
  const gotoPage = (id) => {
    const url = `/home/${id}`;
    push(url);
  };
  const [image1, setImage1] = useState({
    backgroundImage: `url(${news[0].image})`,
  });
  const defaultImg = { backgroundImage: `url(${news[0].image})` };
  const image2 = { backgroundImage: `url(${news[9].image})` };
  const image3 = { backgroundImage: `url(${news[20].image})` };
  const active = { colour: "rgb(255, 255, 255)" };
  const inactive = { colour: "rgba(255, 255, 255, 0.644)" };
  const changeBgd = (e) => {
    e.stopPropagation();
    document.querySelectorAll("li").style = inactive;
    switch (e.target.id) {
      case "img2":
        setImage1(image2);
        e.target.style = active;
        break;
      case "img3":
        setImage1(image3);
        e.target.style = active;
        break;
      case "img1":
        setImage1(defaultImg);
        e.target.style = active;
    }
  };

  return (
    <div className="grid-container">
      <div
        className="img img1 flex-column"
        style={image1}
        onClick={() => gotoPage(news[0].id)}
      >
        <span className="title-big big">{news[0].title}</span>
        <span className="subtitle-big ">{news[0].category}/ Nov 18 2021</span>
        <ul className="change-bgd">
          <li style={active} onClick={changeBgd} id="img1"></li>
          <li onClick={changeBgd} id="img2"></li>
          <li onClick={changeBgd} id="img3"></li>
        </ul>
      </div>

      <div
        className="img img2 flex-column"
        style={image2}
        onClick={() => gotoPage(news[10].id)}
      >
        <span className="title-small">{news[9].title}</span>
        <span className="subtitle-small">{news[9].category}/ Nov 18 2021</span>
      </div>

      <div
        className="img img3 flex-column"
        style={image3}
        onClick={() => gotoPage(news[20].id)}
      >
        <span className="title-small">{news[20].title}</span>
        <span className="subtitle-small">{news[20].category}/ Nov 18 2021</span>
      </div>
    </div>
  );
}
