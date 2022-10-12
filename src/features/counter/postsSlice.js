import { createSlice, nanoid } from '@reduxjs/toolkit'

const postsSlice = createSlice({
  name: 'Posts',
  initialState: [],
  reducers: {
    addTodo: {
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

