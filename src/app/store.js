import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/counter/postsSlice'



export default configureStore({
  reducer: {
    counter: counterReducer, 
    post: postsReducer,
  },
})
