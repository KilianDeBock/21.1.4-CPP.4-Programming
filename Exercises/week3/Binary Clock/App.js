import "./App.css";
import { BinaryClock } from "./components";

function App() {
  return (
    <div className="app">
      <div className="binary-clocks">
        <BinaryClock utc={1} />
      </div>
    </div>
  );
}

export default App;