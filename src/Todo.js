import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button>Edit</button>
        <button>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;
