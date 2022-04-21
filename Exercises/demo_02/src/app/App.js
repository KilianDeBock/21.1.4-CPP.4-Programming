import "./App.css";
import { ClockWithClass, Greeting, GreetingWithClass } from "./components";

function App() {
  return (
    <div className="App">
      <ClockWithClass />
      <Greeting message="Greetings Earthling" />
      <Greeting message={"Like Bash Love Code Maken 8331 shit"} />
      <Greeting message={"Oudenaarde here we come"} />
      <GreetingWithClass message={"Oudenaarde here we come"} />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
