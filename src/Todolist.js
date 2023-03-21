import React, { Component } from "react";
import Newtodoform from "./Newtodoform";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.state = {
      todos: [],
    };
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo key={uuidv4()} task={todo.task} />;
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <p>a Simple Todo List App.</p>
        <hr></hr>
        <ul>{todos}</ul>
        <Newtodoform createTodo={this.create} />
      </div>
    );
  }
}

export default Todolist;
