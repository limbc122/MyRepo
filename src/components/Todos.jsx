import React, { Component } from "react";
import { Checkbox, Input, Icon } from "antd";
// import "./Todos.less";

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [...props.items]
    };
  }

  handleTrashClick = (e, idx, item) => {
    let { items } = this.state;
    items = items.splice(idx, 1);

    this.setState({
      items: [...items]
    });
  };

  handlePressEnter = e => {
    console.log(e.target.value);

    const { items } = this.state;
    items.push({
      title: e.target.value,
      completed: false
    });

    this.setState({
      items: [...items]
    });
  };

  render() {
    const { title } = this.props;
    const { items } = this.state;

    return (
      <div className="Todos">
        <div>{title}</div>
        <div>
          <strike>추가</strike> : <Input type="textbox" name="txtBox" onPressEnter={this.handlePressEnter} />
        </div>
        <ul>
          {items.map((item, idx) => (
            <li>
              <Icon className="icon" type="delete" onClick={e => this.handleTrashClick(e, idx, item)} />
              <Checkbox className={item.completed ? "W-strike" : "W-Nonstrike"} defaultChecked={item.completed} />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
