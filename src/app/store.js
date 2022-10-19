import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../components/postsSlice'



export default configureStore({
  reducer: {
    counter: counterReducer, 
    post: postsReducer,
  },
})
