import React, { Component } from "react";

const styles = {
  textAlign: "left",
  padding: "20px",
  border: "1px solid #ccc",
  margin: "5px"
};

const ulStyles = {
  listStyle: "none"
};

const ListItem = ({ item, idx }) => {
  return (
    <li key={idx}>
      <label>
        <input type="checkbox" />
        {item}
      </label>
    </li>
  );
};

const LectureGoalList = props => {
  return (
    <div style={styles}>
      <div>{props.title}</div>
      <ul style={ulStyles}>
        {props.items.map((item, idx) => {
          return <ListItem item={item} key={idx} />;
        })}
      </ul>
    </div>
  );
};

export default LectureGoalList;
