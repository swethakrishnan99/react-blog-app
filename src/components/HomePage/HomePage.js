import React, { Component } from "react";
import FeaturedArticle from "./FeaturedArticle/FeaturedArticle";
import LatestStories from "./LatestStories/LatestStories";
import TheLatest from "./TheLatest/TheLatest";
import AddBox from "../../common/AddBox";
import HomeImgBox from "../../common/HomeImgBox/HomeImgBox";
import Title from "../../common/Title/Title";
import LatestArticles from "./LatestArticles/LatestArticles";
import TopPosts from "./TopPosts/TopPosts";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page page">
        <FeaturedArticle />
        <Title title={"The Latest"} />
        <TheLatest />

        <div className="flex-row">
          <div className="flex-column">
            <Title title={"Latest Article"} />
            <LatestArticles />
            <HomeImgBox />
          </div>
          <div className="flex-column">
            <AddBox />
            <Title title={"Top Posts"} />
            <TopPosts />
          </div>
        </div>
        <Title title={"Latest Stories"} />
        <div className="flex-row">
          <LatestStories />
        </div>
      </div>
    );
  }
}
