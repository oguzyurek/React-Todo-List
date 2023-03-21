import React, { Component } from "react";
import Todo from "./Todo";

class Newtodoform extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        New Todo Form
        <Todo />
      </div>
    );
  }
}

export default Newtodoform;
