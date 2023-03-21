import React, { Component } from "react";
import Newtodoform from "./Newtodoform";

class Todolist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Todo List
        <Newtodoform />
      </div>
    );
  }
}

export default Todolist;
