import  { ADD_TODO, DELETE_THIS_TODO, DELETE_ALL_TODOS, TOGGLE_TODO } from '../actions/todos';

const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case ADD_TODO:
    return [ ...state, action.payload];

  case TOGGLE_TODO:
    const todoIndex = action.index;
    const changedState = state.map((todo, index) => {
      if(index === todoIndex) {
        return {
          ...todo, 
          done: !todo.done,
        };
      } else {
        return todo;
      }
    });
    return changedState;

  case DELETE_THIS_TODO:
    const targetIndex = action.index;
    const newState = state.filter((todo, index) => index !== targetIndex);
    return newState;
  
  case DELETE_ALL_TODOS:
  //state.length = 0;
    return [];

  default:
    return state;
  }
};

export default reducer;
