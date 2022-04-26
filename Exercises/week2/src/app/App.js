import "./App.css";
import { AnalogClock } from "./components";

const App = () => {
  return (
    <div className="App">
      Hi?
      <AnalogClock utc={0} />
    </div>
  );
};

export default App;
