import { createSlice, nanoid } from '@reduxjs/toolkit'
// import { type } from '@testing-library/user-event/dist/type';
// import axios from "axios";

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
        text = "This is a test message";
        return { payload: { id, text } }
      },
      Dispatch: (onClick) => {
          const id = nanoid()
          .get("http://jsonplaceholder.typicode.com/posts");
          return { payload: { id,  } }
        }
      },
    },
  },
)

export const { addPosts } = postsSlice.actions

export const selectPosts = (state) => state?.posts?.value

export default postsSlice.reducer