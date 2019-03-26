import  { ADD_TODO } from '../actions/todos';

const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case ADD_TODO:
    const todo = action.todo;
    return [ ...state, todo];
  

  default:
    return state;
  }
};

export default reducer;
