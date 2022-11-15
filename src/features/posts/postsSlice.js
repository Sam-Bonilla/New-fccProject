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
    fetchData(state, action){
      state.push(action.payload)
    }
  },
})

export const selectPosts = (state) => state?.posts?.value

export const { postAdded, fetchData } = postsSlice.actions

export default postsSlice.reducer