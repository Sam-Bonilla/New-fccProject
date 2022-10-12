import Posts from "./components/Posts";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
        <h1>React Posts Sharer</h1>
      </header>
      <Counter />
      {/* <Posts /> */}
    </div>
  );
}

export default App;

