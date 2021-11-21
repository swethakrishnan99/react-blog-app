import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header/Header";
import Profile from "./man.png";
import "./ArticlePage.css";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer/Footer";
import MoreArticle from "./MoreArticle/MoreArticle";

class ArticlePage extends Component {
  componentDidMount() {
    this.props.toggleNav();
  }
  componentWillUnmount() {
    this.props.toggleNav();
  }
  render() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const news = this.props.getNews(id);
    if (news === undefined) {
      push("/not-found");
    }
    return (
      <div>
        <Header />
        <div className="page1 flex-column">
          <p className="title">{news.title}</p>
          <div className="flex-row2 space-between">
            <div className="flex-row1">
              <img src={Profile} alt="profile not found" className="profile" />
              <div>
                <p className="profile-name">Dmitry Nozhdnko</p>
                <p className="subtitle">Nov 19, 2021 - 10 min read</p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
              <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
              <FontAwesomeIcon icon={faInstagram} className="icon" />
              <FontAwesomeIcon icon={faYoutube} className="icon" />
            </div>
          </div>
          <img src={news.image} alt="not found" className="image" />
          <p className="content">{news.content}</p>
          <Footer />
        </div>
        <MoreArticle category={news.category} Profile={Profile} />
      </div>
    );
  }
}
export default withRouter(ArticlePage);
