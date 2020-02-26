checkItem = id => {
const clg = ({ todos }) => {
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
};
this.setState(state => console.log(clg(state)) || clg(state));
};
