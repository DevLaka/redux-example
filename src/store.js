import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Step 3
// Creating the store passing the root reducer, initial state, and enhancer
const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
