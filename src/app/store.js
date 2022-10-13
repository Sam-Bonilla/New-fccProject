import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/counter/postsSlice'

//Add postsReducer

export default configureStore({
  reducer: {
    counter: counterReducer, postsReducer,
  },
})


// export default configureStore({
//   reducer: {
//     posts: postsReducer,
//   },
// })