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



  //   function createSlice({

  //     // A name, used in action types
  //     name: string,

  //     // The initial state for the reducer
  //     initialState: any,

  //     // An object of "case reducers". Key names will be used to generate actions.
  //     reducers: Object<string, ReducerFunction | ReducerAndPrepareObject>

  //     // A "builder callback" function used to add more reducers, or
  //     // an additional object of "case reducers", where the keys should be other
  //     // action types
  //     extraReducers?:
  //     | Object<string, ReducerFunction>
  //     | ((builder: ActionReducerMapBuilder<State>) => void)
  // })