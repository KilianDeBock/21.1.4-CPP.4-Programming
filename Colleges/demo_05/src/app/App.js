import "./App.css";
import {
  DimmedLamp,
  Dimmer,
  EssayForm,
  JobsForm,
  NameForm,
  PostForm,
} from "./components";
import { useState } from "react";

const App = () => {
  const [lampColor, setLampColor] = useState("rgb(0,0,0)");
  const handleDimmerValue = (v) => {
    setLampColor(`rgb(${v}, ${v}, ${v})`);
  };

  return (
    <div className="app">
      <Dimmer val={handleDimmerValue} />
      <DimmedLamp lampColor={lampColor} />
      <h1>{"_".repeat(50)}</h1>
      <NameForm />
      <h1>{"_".repeat(50)}</h1>
      <EssayForm />
      <h1>{"_".repeat(50)}</h1>
      <JobsForm />
      <h1>{"_".repeat(50)}</h1>
      <PostForm />
    </div>
  );
};

export default App;
