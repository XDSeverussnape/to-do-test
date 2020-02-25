import React, { Component } from "react";

export default class TodoListItem extends Component {
  render() {
    const { todos } = this.props.todo;
    const { onChaked } = this.props;
    const { onDeleted } = this.props;
    console.log(todos);
    const cls = [];

    if (todos.checked) {
      cls.push("done");
    }

    const todoItems = todos.map(elem => {
      return (
        <li className={cls} key={elem.id}>
          <input
            type="checkbox"
            //checked={!elem.checked}
            onChange={() => {
              console.log(elem);
              onChaked(elem.id);
            }}
          />
          {elem.title}
          <i
            className="material-icons red-text"
            onClick={() => {
              onDeleted(elem.id);
            }}
          >
            delete
          </i>
        </li>
      );
    });
    return (
      <ul>
        <input />
        {todoItems}
      </ul>
    );
  }
}
