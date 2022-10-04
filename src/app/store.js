import counterReducer from '../features/counter/counterSlice'

export default function configureStore({
  reducer: {
    counter: counterReducer,
  },
})