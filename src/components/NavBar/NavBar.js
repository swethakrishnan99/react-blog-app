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
    console.log(this.state.menuClicked);
    const navLink = [
      { label: "Home", to: "/home" },
      { label: "Bollywood", to: "/bollywood" },
      { label: "Technology", to: "/technology" },
      { label: "Hollywood", to: "/hollywood" },
      { label: "Fitness", to: "/fitness" },
      { label: "Food", to: "/food" },
      { label: "Login", to: "/get-start" },
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
