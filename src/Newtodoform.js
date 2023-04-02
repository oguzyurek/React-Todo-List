import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

class Newtodoform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "" }],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("Submitted!!!");
    this.props.createTodo({ ...this.state, id: uuidv4(), completed: false });
    this.setState({ task: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo</label>
          <input
            type="text"
            id="task"
            name="task"
            placeholder="New Todo"
            value={this.state.task}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Newtodoform;
