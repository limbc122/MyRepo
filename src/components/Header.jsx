import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

class Header extends Component {
  state = {
    isToggleOn: true,
    imgCssName: "App-rotate",
    titleStr: "Welcome to React"
  };

  handleClick = () => {
    if (this.state.isToggleOn === true) {
      this.setState({
        isToggleOn: false,
        imgCssName: "App-stop",
        titleStr: "Stop to React"
      });
    } else {
      this.setState({
        isToggleOn: true,
        imgCssName: "App-rotate",
        titleStr: "Welcome to React"
      });
    }
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} onClick={this.handleClick} className={this.state.imgCssName} alt="logo" />
        <h1 className="App-title">{this.state.titleStr}</h1>
      </header>
    );
  }
}

export default Header;
