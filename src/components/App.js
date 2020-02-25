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
      const idx = todos.findIndex(el => el.id === id);
      todos.map(todo => {
        if (idx === id) {
          todo.checked = !todo.checked;
        }
        return { todos: todos };
      });
    });
  };

  deleteItem = id => {
    this.setState(({ todos }) => {
      todos.filter(todo => {
        return todo.id === id;
      });
    });
  };

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <TodoList
          todos={this.state.todos}
          onChecked={this.checkItem}
          onDeleted={this.deleteItem}
        />
      </div>
    );
  }
}
