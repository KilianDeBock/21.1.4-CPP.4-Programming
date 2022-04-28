import "./App.css";
import { EssayForm, JobsForm, NameForm } from "./components";

const App = () => {
  return (
    <div className="app">
      <NameForm />
      <EssayForm />
      <JobsForm />
    </div>
  );
};

export default App;
