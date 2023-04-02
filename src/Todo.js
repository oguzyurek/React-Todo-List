import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditting: false, task: this.props.task };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateDone = this.updateDone.bind(this);
  }

  updateDone(evt) {
    this.props.updateDone(this.props.id);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({ isEditting: !this.state.isEditting });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditting: !this.state.isEditting });
  }

  handleChange(evt) {
    this.setState({
      task: evt.target.value,
    });
  }

  render() {
    let result;
    if (this.state.isEditting) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              id="task"
              name="task"
              value={this.state.task}
            ></input>
            <button type="submit">Save</button>
          </form>
        </div>
      );
      if (!this.state.isEditting) {
        result = "";
      }
    }

    let button = <button onClick={this.toggleForm}>Edit</button>;

    return (
      <div>
        <div>{result}</div>
        <li
          className={this.props.completed ? "done" : "notdone"}
          onClick={this.updateDone}
        >
          {this.props.task}
        </li>
        <div>
          {!this.state.isEditting ? button : ""}{" "}
          <button onClick={this.handleRemove}>X</button>
        </div>
      </div>
    );
  }
}

export default Todo;
