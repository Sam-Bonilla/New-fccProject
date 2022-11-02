// import { createSlice, nanoid } from '@reduxjs/toolkit'


// const postsSlice = createSlice({
//   name: 'Posts',
//   initialState: [],
//   reducers: {
//     addPosts: {
//       reducer: (state, action) => {
//         state.push(action.payload)
//       },
//       prepare: (text) => {
//         const id = nanoid()
//         text = "This is a test message";
//         return { payload: { id, text } } },
//         }
//       },
//     },
// )



// export default postsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post', content: 'This is a test message' },
  { id: '2', title: 'Second Post', content: 'This is the second test message' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
  },
})

export const selectPosts = (state) => state?.posts?.value

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer