import * as types from "./../constanst/actionTypes";

let nextTodoId = 2;

export const addTodo = content => ({
  type: types.ADD_TODO,
  data: {
    id: ++nextTodoId,
    content,
    completed: false
  }
});

export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id
});


export const setFilter = filter => (
  {
    type: types.SET_FILTER,
    filter
  }
);
