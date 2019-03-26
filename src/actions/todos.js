export const ADD_TODO = 'ADD_TODO';
export const DELETE_THIS_TODO = 'DELETE_THIS_TODO';

export const addNewTodo = todo => ({
  type: ADD_TODO,
  todo,
});

export const deleteThisTodo = index => ({
  type: DELETE_THIS_TODO,
  index,
});