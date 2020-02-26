import React from "react";
import { connect } from "react-redux";
import { updataTodo } from "../actions/actions";

function Data({ data, id }) {
  return <span className="w-25 ml-2">{data}</span>;
}

const mapDispatchToProps = dispatch => {
  return {
    updataTodo: (value, id) => {
      dispatch(updataTodo(value, id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Data);
