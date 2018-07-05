import React, { Component } from "react";
import moment from "moment";
import Todos from "./components/Todos";
import Timer from "./components/Timer";
import Header from "./components/Header";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

const goals = [
  { title: "1. React 개발에 필요한 환경을 구축한다.", completed: true },
  { title: "2. 새로운 자바스크립트 문법을 익힌다.", completed: false },
  { title: "3. 새로운 자바스크립트 문법을 익힌다.", completed: false }
];

const TIME_EXPIRED = "2018-07-05T16:10:00+09:00";

class App extends Component {
  state = {
    isExpired: false,
    dateStr: "2018-07-05T16:10:00+09:00"
  };

  constructor(props) {
    console.log("constructor");
    super(props);
  }

  handleComplete = () => {
    this.setState({ isExpired: true });
    console.log("Timer call");
  };

  handleClick = () => {};

  render() {
    //const isExpired = moment(TIME_EXPIRED) < moment();

    const { isExpired, dateStr } = this.state;

    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Todos items={goals} title={"강의 목표!"} />
        {!isExpired && <Timer key={dateStr} expireDate={dateStr} onComplete={this.handleComplete} />}
      </div>
    );
  }
  componentWillUnmount() {
    console.log("unmount");
  }
}

export default App;
