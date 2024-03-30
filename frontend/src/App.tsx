import "./App.css";
import { Link, Route, Switch } from "wouter";
import { gRPCClients } from "./gRPCClients";
import { ChatsWrapper } from "./chatroom/ChatsWrapper";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/chatroom">Chatroom</Link>
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

function ChatroomPage() {
  return (
    <div className="Chatroom">
      <ChatsWrapper clients={gRPCClients}/>
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
        <Route path="/chatroom" component={ChatroomPage} />
        <Route path="/about" component={About} />
        <Route>
          <h2>404 not found</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;