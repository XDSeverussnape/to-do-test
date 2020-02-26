import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

export default function TodoList(props) {
  const todoItems = props.todos.map(({ checked, style, id, title, data }) => {
    return (
      <TodoListItem
        key={id}
        checked={checked}
        style={style}
        title={title}
        id={id}
        onDeleted={props.onDeleted}
        data={data}
      />
    );
  });

  return <div className="container mt-5">{todoItems}</div>;
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool.isRequired,
      style: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  onDeleted: PropTypes.func.isRequired
};
