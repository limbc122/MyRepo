import React, { Component } from "react";
import moment from "moment";
import LectureGoalList from "./components/LectureGoalList";
import Timer from "./components/Timer";
import logo from "./logo.svg";
import "./App.css";

const goals = [
  "1. React 개발에 필요한 환경을 구축한다.",
  "2. 새로운 자바스크립트 문법을 익힌다.",
  "3. 새로운 자바스크립트 문법을 익힌다."
];

const TIME_EXPIRED = "2018-07-04T16:10:00+09:00";

class App extends Component {
  state = {
    isExpired: false
  };

  handleComplete = () => {
    this.setState({ isExpired: true });
    console.log("Timer call");
  };

  render() {
    const isExpired = moment(TIME_EXPIRED) < moment();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hell!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LectureGoalList items={goals} title={"강의 목표!"} />
        {!isExpired && <Timer expireDate={TIME_EXPIRED} onComplete={this.handleComplete} />}
      </div>
    );
  }
}

export default App;
