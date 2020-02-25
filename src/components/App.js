import React, { Component } from "react";
import TodoList from "./TodoList";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, checked: false, title: "Вивчити реакт" },
      { id: 2, checked: false, title: "Навчитися робити свої компоненти" },
      {
        id: 3,
        checked: false,
        title: "Пройти співбесіду і влаштуватися на роботу"
      }
    ]
  };

  checkItem = id => {
    this.setState(({ todos }) => {
      const index = todos.findIndex(el => el.id === id);
      const oldItem = todos[index];
      const newItem = { ...oldItem, checked: !oldItem.checked };
      const newTodos = [
        ...todos.slice(0, index),
        newItem,
        ...todos.slice(index + 1)
      ];
      return {
        todos: newTodos
      };
    });
  };

  deleteItem = id => {
    this.setState(({ todos }) => {
      const index = todos.findIndex(el => el.id === id);
      const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
      return {
        todos: newTodos
      };
    });
  };

  addItem = item => {
    this.setState(({ todos }) => {
      const newTodos = [...todos, item];
      return {
        todos: newTodos
      };
    });
  };

  render() {
    console.log(this.checkItem());
    return (
      <div>
        <h1>ToDo List</h1>
        <TodoList
          todos={this.state.todos}
          onChecked={this.checkItem}
          onDeleted={this.deleteItem}
          onChange={this.addItem}
        />
      </div>
    );
  }
}
