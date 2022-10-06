import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts(state, action) {
      state.posts.push(action.payload);
    },
    deletePosts(state, action){
      state.posts = state.posts.filter((posts)=> posts.id !== action.payload.id);
    }
  },
});



export const { addPost, deletePosts } = postsSlice.actions;

export default postsSlice.reducer
