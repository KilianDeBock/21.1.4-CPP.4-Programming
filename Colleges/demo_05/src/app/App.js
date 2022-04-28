import "./App.css";
import { EssayForm, JobsForm, NameForm, PostForm } from "./components";

const App = () => {
  return (
    <div className="app">
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
