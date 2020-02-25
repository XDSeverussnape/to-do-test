import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  return (
    <TodoListItem
      todo={props}
      onChaked={props.onChecked}
      onDeleted={props.onDeleted}
    />
  );
}
