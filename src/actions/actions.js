import {
  ADD_TODO,
  CHECKBOX_TODO,
  DELETE_TODO,
  UPDATE_TEXTATREA_VALUE
} from "./constans";

export const addTodo = item => {
  return { type: ADD_TODO, payload: item };
};

export const checkboxTodo = id => {
  return { type: CHECKBOX_TODO, payload: id };
};

export const deleteTodo = id => {
  return { type: DELETE_TODO, payload: id };
};

export const updataTodo = (value, id) => {
  return { type: UPDATE_TEXTATREA_VALUE, payload: { value, id } };
};
