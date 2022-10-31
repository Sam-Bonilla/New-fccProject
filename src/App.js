// import Posts from "./components/Posts";
// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Counter } from "./features/counter/Counter";

// // import { PostsList } from './features/posts/PostsList'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="/logo.svg" className="App-logo" alt="logo" />
//         <h1>React Posts Sharer</h1>
//       </header>
//       <Posts />
//     </div>
//   );
// }

// export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { PostsList } from './features/posts/PostsList'

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