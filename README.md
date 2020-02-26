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



https://redux.js.org/basics/usage-with-react/

https://redux.js.org/basics/reducers/

https://redux.js.org/basics/store/

https://react-redux.js.org/introduction/quick-start

https://redux-docs.netlify.com/recipes/configuring-your-store/
