import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import Todo from "./Todo";

class Newtodoform extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    // this.setState({ [evt.target.todo]: evt.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label>New Todo</label>
          <input></input>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Newtodoform;
