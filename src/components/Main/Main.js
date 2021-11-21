import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import NotFound from "../NotFound/NotFound";
import GetStarted from "../GetStarted/GetStarted";
import ArticlePage from "../ArticlePage/ArticlePage";
import CategoryPage from "../CategoryPage/CategoryPage";
import NewsProvider from "../../common/News";
export default class Main extends Component {
  static contextType = NewsProvider;
  render() {
    const newsArray = this.context;
    const getNews = (id) => {
      return newsArray.find((news) => news.id === +id);
    };

    return (
      <>
        <Switch>
          <Route path="/get-start" exact>
            <GetStarted toggleNav={this.props.toggleNav} />
          </Route>
          <Route path="/home" component={HomePage} exact />
          <Route path="/:category" component={CategoryPage} exact />
          <Route path="/home/:id" exact>
            <ArticlePage toggleNav={this.props.toggleNav} getNews={getNews} />
          </Route>

          <Route path="/not-found">
            <NotFound toggleNav={this.props.toggleNav} />
          </Route>
          <Redirect from="/" to="/home" exact />
          <Redirect to="/not-found" />
        </Switch>
      </>
    );
  }
}
