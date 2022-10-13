import { createSlice, nanoid } from '@reduxjs/toolkit'

const postsSlice = createSlice({
  name: 'Posts',
  initialState: [],
  reducers: {
    addPosts: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (text) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
    },
  },
})

export const selectPosts = (state) => state.posts.value

export default postsSlice.reducer