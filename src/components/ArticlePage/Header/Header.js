import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import GetStartBtn from "../../../common/GetStartBtn";
import SiteLogo from "../../../common/SiteLogo";

export default class Header extends Component {
  state = { clicked: false };
  // const likeArticle = () => {
  //   console.log(this.state.clicked);
  //   this.setState((prevState) => ({ clicked: !prevState.clicked }));
  // };

  render() {
    return (
      <>
        <div className="header">
          <SiteLogo />
          <GetStartBtn />
        </div>
        <div className="flex-column fixed center-fix">
          {/* onClick={likeArticle}> */}
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={this.state.clicked ? "icon clicked" : "icon"}
          />
          <FontAwesomeIcon icon={faShareAlt} className="icon" />
        </div>
      </>
    );
  }
}
