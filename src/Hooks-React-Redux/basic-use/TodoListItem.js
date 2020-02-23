import React from "react";
import { useSelector } from "react-redux";

const TodoListItem = props => {
    const todo = useSelector(state => state.todos[props.id]);
    return <div className="basic-use">{todo.content}</div>
}
export default TodoListItem;