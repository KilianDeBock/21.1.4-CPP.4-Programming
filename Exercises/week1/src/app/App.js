import "./App.css";
import { ClockWithClass, Person } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Oefening 1: Person</h2>
        <Person
          firstname="Michiel"
          lastname="Willems"
          pictureUrl="https://lyttle.it/favicon.ico"
          age="24"
          length="172"
          weight="90"
        />
        <h2>Oefening 2: Shapes</h2>
        <ClockWithClass />
      </header>
    </div>
  );
}

export default App;
