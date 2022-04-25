import { useState } from "react";

const ThemeMode = ({ utc = 0 }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log("toggleTheme");
    document.body.style.backgroundColor = isDarkMode ? "#fff" : "#000";
    document.body.style.color = !isDarkMode ? "#fff" : "#000";
  };

  return <button onClick={() => toggleTheme()}>Change theme</button>;
};

export default ThemeMode;
