import React from "react";
import AddTodo from "./components/AddTodos";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import CounterComponent from "./Hooks-React-Redux/basic-use/CounterComponent";
import TodoListItem from "./Hooks-React-Redux/basic-use/TodoListItem";
import MemoizingSelector from "./Hooks-React-Redux/basic-use/MemoizingSelector";
import "./App.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
      {/* Hooks react redux */}
      <CounterComponent />
      <TodoListItem id={0} />
      <MemoizingSelector />
    </div>
  );
}
