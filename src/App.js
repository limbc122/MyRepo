import React, { Component } from "react";
import Todos from "./components/Todos";
import Timer from "./components/Timer";
import Header from "./components/Header";
import AsyncState from "./components/AsyncState";
import "./App.css";
import { Icon } from "antd";
// import axios from "axios";

const goals = [
  { title: "1. React 개발에 필요한 환경을 구축한다.", completed: true },
  { title: "2. 새로운 자바스크립트 문법을 익힌다.", completed: false },
  { title: "3. 새로운 자바스크립트 문법을 익힌다.", completed: false }
];

class App extends Component {
  state = {
    isExpired: false,
    dateStr: "2018-07-05T16:10:00+09:00"
  };

  // componentDidMount() {
  //   axios.get("https://tvjan-tvmaze-v1.p.mashape.com/schedule").then(({ data }) => {
  //     this.setState({ data });
  //   });
  // }

  render() {
    const { isExpired, dateStr } = this.state;

    return (
      <div className="App">
        <Header />
        <Todos items={goals} title={"강의 목표!"} />
        {!isExpired && <Timer key={dateStr} expireDate={dateStr} onComplete={this.handleComplete} />}
      </div>
    );
  }
}

export default App;
