import  { ADD_TODO, DELETE_THIS_TODO } from '../actions/todos';

const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case ADD_TODO:
    const todo = action.todo;
    return [ ...state, todo];

  case DELETE_THIS_TODO:
    const targetIndex = action.index;
    const newState = state.filter((todo, index) => index !== targetIndex);
    return newState;
    
  default:
    return state;
  }
};

export default reducer;
