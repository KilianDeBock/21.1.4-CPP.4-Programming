import "./App.css";
import {
  Alert,
  AlertSuccess,
  BeerRandom,
  Dialog,
  SplitPane,
} from "./components";

import { APP_NAME } from "../data/constants.js";
import portfolio from "../data/portfolio.json";

const App = () => {
  return (
    <div className="app">
      <BeerRandom />
      <h1>{APP_NAME}</h1>
      {portfolio.length}
      <Alert></Alert>
      <AlertSuccess></AlertSuccess>
      <Dialog title="updated post with Id 123453">
        <p>updated Post with 12345</p>
        <img src="https://lyttle.it/favicon.ico" alt="Logo" />
      </Dialog>
      <SplitPane left={<Dialog title="yes" />} right={<Dialog title="No" />}>
        <p>Hello</p>
      </SplitPane>
    </div>
  );
};

export default App;
