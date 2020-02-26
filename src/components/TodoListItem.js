import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkboxTodo, deleteTodo } from "../actions/actions";
import EditText from "./Editebletext";
import Data from "./Data";

function TodoListItem(props) {
  const { checkItem, onDeleted, checked, style, id, title, data } = props;

  return (
    <div className="d-flex">
      <div className={checked ? style : null} key={id}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            checkItem(id);
          }}
        />
        <EditText title={title} id={id} />

        <i
          className="material-icons red-text"
          onClick={() => {
            onDeleted(id);
          }}
        >
          delete
        </i>
      </div>
      <Data data={data} id={id} />
    </div>
  );
}

//const mapStateToProps = store => {
// console.log(store);
//  return { todos: store.todos };
//};

const mapDispatchToProps = dispatch => {
  return {
    checkItem: id => {
      dispatch(checkboxTodo(id));
    },
    onDeleted: id => {
      dispatch(deleteTodo(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(TodoListItem);

TodoListItem.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  style: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};
