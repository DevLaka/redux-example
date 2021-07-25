import  { FETCH_POSTS, NEW_POSTS } from '../actions/types';

// Step 7
// Defining Reducer
const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}