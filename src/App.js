import "./App.css";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import store from './store';

// Step 1
// Import Provider form react-redux.
import { Provider } from "react-redux";

function App() {
  return (
    // Step 2
    // Wrap the whole app (or part of the app we need access to store) with Provider.
    // Provider requires a Store.
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
