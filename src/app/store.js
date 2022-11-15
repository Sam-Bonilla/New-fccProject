import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "../features/posts/postsSlice"
import createSagaMiddleware from "redux-saga";
import saga from "saga"; 

let sagaMiddleware = createSagaMiddleware();

// store confiuration
const store = configureStore({
    reducer: {
    post: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: false,
  }).concat (sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;