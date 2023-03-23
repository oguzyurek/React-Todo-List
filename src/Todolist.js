import React, { Component } from "react";
import Newtodoform from "./Newtodoform";
import Todo from "./Todo";


class Todolist extends Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.state = {
      todos: [],
    };
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={this.remove}
        />
      );
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
