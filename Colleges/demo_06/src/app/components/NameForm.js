import { useState } from "react";

const NameForm = () => {
  const [fullName, setFullName] = useState("");

  const handleOnChange = (ev) => {
    setFullName(ev.target.value);
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    alert(`Hello ${fullName}!`);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Fullname:
        <input
          type="text"
          placeholder="Type your full name here"
          value={fullName}
          onChange={handleOnChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NameForm;
