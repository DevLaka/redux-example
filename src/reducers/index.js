import  { combineReducers } from 'redux';
import postReducer from './postReducer.js';

// Step 4
// Combining reducers
// postReducer given the name posts
export default combineReducers({
  posts: postReducer
});