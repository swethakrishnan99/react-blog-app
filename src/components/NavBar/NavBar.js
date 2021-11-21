import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import SiteLogo from "../../common/SiteLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

class NavBar extends Component {
  state = { menuClicked: true };

  handleMenuBar = () => {
    if (window.innerWidth > 720) return;
    this.setState((prevState) => ({ menuClicked: !prevState.menuClicked }));
  };
  render() {
    const navLink = [
      { label: "Home", to: "/react-blog-app/home" },
      { label: "Bollywood", to: "/react-blog-app/bollywood" },
      { label: "Technology", to: "/react-blog-app/technology" },
      { label: "Hollywood", to: "/react-blog-app/hollywood" },
      { label: "Fitness", to: "/react-blog-app/fitness" },
      { label: "Food", to: "/react-blog-app/food" },
      { label: "Login", to: "/react-blog-app/get-start" },
    ];
    return (
      <div className="fixed">
        <div id="header">
          <SiteLogo />
          <button onClick={this.handleMenuBar}>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </button>
        </div>
        {this.state.menuClicked && (
          <ul className="navigation-bar flex-row">
            {navLink.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    key={index}
                    onClick={this.handleMenuBar}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
export default withRouter(NavBar);
