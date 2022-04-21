import logo from "./logo.svg";
import "./App.css";

const todos = [
  "Buying food",
  "Cook some meal",
  "Do some some Judo with Lester",
];

const Item = ({ message }) => {
  return (
    <li className="task" data-say={message}>
      {message}
    </li>
  );
};

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <Item tabIndex={i} key={i} message={todo} />
      ))}
    </ul>
  );
};

function App() {
  const name = "Kilian De Bock";
  const person = {
    firstname: "Kilian",
    lastname: "De Bock",
  };
  const fullName = (person) => {
    return `${person.firstname} ${person.lastname}`;
  };
  return (
    <>
      <lavel htmlFor="name">Name:</lavel>
      <input id="name" type="text"></input>
      <TodoList todos={todos} />
      <header className="App-header">
        <p>{true}</p>
        <p>{false}</p>
        <p>{undefined}</p>
        <p>{null}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World to {name}</h1>
        <h2>And hello to {fullName(person)}!</h2>
        <div className="person">
          <p>{fullName(person)}</p>
        </div>
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
    </>
  );
}

export default App;
