import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

// import { Provider } from "react-redux";
import store from "./app/store";

import { Navbar } from './app/Navbar'

import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
// import { ListTodo } from './features/posts/ListTodo'

console.log(store.getState());

function App() {
  return (
    <Router>
      <Navbar />
          <div className="App">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
  </Router>
  )
}

export default App
