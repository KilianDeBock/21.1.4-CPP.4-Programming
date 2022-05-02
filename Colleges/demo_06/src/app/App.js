import "./App.css";
import { Alert, AlertSuccess, Dialog, SplitPane } from "./components";

const App = () => {
  return (
    <div className="app">
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
