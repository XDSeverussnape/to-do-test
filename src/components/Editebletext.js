import React, { useState } from "react";
import { connect } from "react-redux";
import { updataTodo } from "../actions/actions";

function EditText({ title, updataTodo, id }) {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(title);
  return (
    <div
      className="shadow p-4 mb-4 bg-white mr-3 ml-4"
      style={{ display: "inline", cursor: "pointer" }}
      onDoubleClick={() => {
        setEditing(!isEditing);
      }}
    >
      {isEditing ? (
        <textarea
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              console.log(e.keyCode);
              updataTodo(value, id);
              setEditing(!isEditing);
            }
          }}
        />
      ) : (
        value
      )}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    updataTodo: (value, id) => {
      dispatch(updataTodo(value, id));
    }
  };
};

export default connect(null, mapDispatchToProps)(EditText);
