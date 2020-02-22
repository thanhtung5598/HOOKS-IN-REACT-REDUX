import React from "react";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors/index";
import Todo from "./Todo";

const TodoList = ({ allTodos }) => (
  <ul className="todo-list">
    {allTodos && allTodos.length ? allTodos.map((todo, index) => <Todo key={index} todo={todo} />) : "No todos, yay!"}
  </ul>
);
const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const allTodos = getTodosByVisibilityFilter(state, visibilityFilter);
  return {
    allTodos
  };
};
export default connect(mapStateToProps)(TodoList);
