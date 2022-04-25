import "./App.css";
import { Clock, ClockWithClass, ThemeMode } from "./components";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <ThemeMode />
      <ClockWithClass />
      <ClockWithClass utc={1} />
      <ClockWithClass utc={-2} />
      <Clock />
      <Clock utc={1} />
      <Clock utc={count} />
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default App;
