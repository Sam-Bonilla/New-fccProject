import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/posts/postsSlice'
import createSagaMiddleware from "redux-saga";
import saga from "../saga.js";
import {
  createSlice,
  getDefaultMiddleware
} from "@reduxjs/toolkit";



export default configureStore({
  reducer: {
    counter: counterReducer, 
    post: postsReducer,
      },
    });




const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: []
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        todos: action.payload
      };
    }
  }
});

export const { fetchData } = todoSlice.actions;

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
  middleware
});

sagaMiddleware.run(saga);

// export default store;

