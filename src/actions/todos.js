export const ADD_TODO = 'ADD_TODO';
export const DELETE_THIS_TODO = 'DELETE_THIS_TODO';
export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addNewTodo = (todo, done) => ({
  type: ADD_TODO,
  payload: {
    todo,
    done,
  }
});

export const deleteThisTodo = index => ({
  type: DELETE_THIS_TODO,
  index,
});

export const deleteAllTodos = () => ({
  type: DELETE_ALL_TODOS,
});

export const toggleTodo = index => ({
  type: TOGGLE_TODO,
  index,
});