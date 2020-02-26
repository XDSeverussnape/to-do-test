import {
  ADD_TODO,
  CHECKBOX_TODO,
  DELETE_TODO,
  UPDATE_TEXTATREA_VALUE
} from "./actions/constans";

const initialState = {
  todos: [
    {
      id: 1,
      checked: false,
      title: "Lern React",
      style: "line",
      data: new Date().toString()
    },
    {
      id: 2,
      checked: false,
      title: "Make Awsome App",
      style: "line",
      data: new Date().toString()
    },
    {
      id: 3,
      checked: false,
      title: "Have an interview and get a job",
      style: "line",
      data: new Date().toString()
    }
  ]
};

const checkItem = (id, todos) => {
  const newArray = todos.map(item => {
    if (item.id === id) {
      return { ...item, checked: !item.checked };
    }
    return item;
  });
  return newArray;
};

const createItem = item => {
  const newItem = {
    id: Math.random(),
    checked: false,
    title: item,
    style: "line",
    data: new Date().toString()
  };
  return newItem;
};

const deleteTodo = (id, todos) => {
  const newArray = todos.filter(item => {
    return item.id !== id;
  });
  return newArray;
};

const updataTodo = ({ value, id }, todos) => {
  const newArray = todos.map(item => {
    if (item.id === id) {
      return { ...item, title: value };
    }
    return item;
  });
  return newArray;
};

function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, createItem(action.payload)] };
    case CHECKBOX_TODO:
      return { ...state, todos: checkItem(action.payload, state.todos) };
    case DELETE_TODO:
      return { ...state, todos: deleteTodo(action.payload, state.todos) };
    case UPDATE_TEXTATREA_VALUE:
      return { ...state, todos: updataTodo(action.payload, state.todos) };
    default:
      return state;
  }
}

export default todoApp;
