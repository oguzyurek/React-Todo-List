import React, { Component } from "react";
import Newtodoform from "./Newtodoform";
import Todo from "./Todo";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.handleLine = this.handleLine.bind(this);
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

  handleLine(id, updatedTask) {
    const updateLine = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updateLine });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          updateDone={this.handleLine}
          removeTodo={this.remove}
          updateTodo={this.update}
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
