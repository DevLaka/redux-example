import { FETCH_POSTS, NEW_POSTS } from "./types";

// Step 6
// Defining actions
export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};

// same above function in longer way
// export function fetchPosts() {
//   return function (dispatch) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((posts) => dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       }));
//   };
// }
