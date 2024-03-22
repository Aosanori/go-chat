import "./App.css";
import { Link, Route, Switch } from "wouter";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </nav>
  );
}

function Home() {
  return (
    <div className="App">
      <h2>Home</h2>
      <Nav />
    </div>
  );
}

function About() {
  return (
    <div className="App">
      <h2>About</h2>
      <Nav />
    </div>
  );
}

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route>
          <h2>404 not found</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;