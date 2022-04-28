import { useState } from "react";

const EssayForm = () => {
  const [essay, setEssay] = useState("");

  const handleOnChange = (ev) => {
    setEssay(ev.target.value);
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    alert(`Hello ${essay}!`);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Fullname:
        <textarea
          placeholder="Type your full name here"
          value={essay}
          onChange={handleOnChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default EssayForm;
