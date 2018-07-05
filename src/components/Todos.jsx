import React from "react";
import { Checkbox } from "antd";

const ListItem = ({ title, completed }) => {
  return (
    <li>
      <Checkbox defaultChecked={completed}>{title}</Checkbox>
    </li>
  );
};

const Todos = props => {
  return (
    <div className="Todos">
      <div>{props.title}</div>
      <ul>
        {props.items.map((item, idx) => {
          return <ListItem key={idx} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default Todos;
