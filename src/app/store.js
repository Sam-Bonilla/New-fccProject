import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import postsReducer from "../features/posts/postsSlice"
import createSagaMiddleware from "redux-saga";
import saga from "src/saga.js";
import {
  getDefaultMiddleware
} from "@reduxjs/toolkit";

// export default configureStore({
//   reducer: {
//     counter: counterReducer, 
//     post: postsReducer,
//   },
// })

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


// let postsSlice = createSlice();

const store = configureStore({
  reducer: {
    // post: postsSlice.reducer,
    counter: counterReducer, 
    post: postsReducer,
  },
  middleware,

reducers: {
  fetchData: (state, action) => {
    return {
      posts: action.payload
    };
  }
}
});

export const { fetchData } = postsReducer.actions; 

sagaMiddleware.run(saga);

export default store;