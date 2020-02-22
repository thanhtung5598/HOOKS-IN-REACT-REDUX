import { VISIBILITY_FILTERS } from "./../constanst/visibilityFilter";

export const getTodosByVisibilityFilter = (state, visibilityFilter) => {
  const allTodos = state.todos;
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED: // complete
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE: // incomplete
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL: // all
    default:
      return allTodos;
  }
};
