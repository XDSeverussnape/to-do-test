import React, { Component } from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { addTodo } from "../actions/actions";

const root = class App extends Component {
  deleteItem = id => {
    this.setState(({ todos }) => {
      const newTodos = todos.filter(element => {
        return element.id !== id;
      });
      return {
        todos: newTodos
      };
    });
  };

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <input
          className="form-control"
          placeholder="To do item"
          onKeyDown={e => {
            if (e.keyCode === 13) {
              this.props.addTodo(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <TodoList todos={this.props.todos} onDeleted={this.deleteItem} />
      </div>
    );
  }
};

const mapStateToProps = store => {
  return { todos: store.todos };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch(addTodo(todo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(root);
