import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import * as actions from './../redux/actions/index';

const Todo = ({ todo, toggleTodo }) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}
    <span className={classnames(
      "todo-item__text",
      todo && todo.completed && "todo-item__text--completed"
    )}> {todo.content} </span>
  </li>
);
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleTodo: (id) => {
      dispatch(actions.toggleTodo(id));
    }
  }
}
export default connect(null, mapDispatchToProps)(Todo);
