import { useEffect, useState } from "react";

const ThemeMode = ({ utc = 0 }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [degrees, setDegrees] = useState(0);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log("toggleTheme");
    // document.body.style.backgroundColor = isDarkMode ? "#fff" : "#000";
    // document.body.style.color = !isDarkMode ? "#fff" : "#000";
    document.body.classList.toggle("is-darkmode");
  };

  const handleDegrees = () => {
    setDegrees(degrees + 6);
  };

  useEffect(() => {
    document.body.style.transform = `rotate(${degrees}deg)`;
  }, [degrees]);

  const linkHandler = (ev) => {
    ev.preventDefault();
    console.log("Magic link handler");
  };

  return (
    <>
      <button onClick={() => toggleTheme()}>Change theme</button>
      <a
        href="https://www.pgm.gent/"
        title="A Link"
        onClick={(ev) => linkHandler(ev)}
      >
        Press Me
      </a>
      <button onClick={() => handleDegrees()}>Change degree</button>
    </>
  );
};

export default ThemeMode;
