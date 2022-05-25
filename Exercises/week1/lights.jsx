import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = `#${isDarkMode ? "111" : "fdfdfd"}`;
  }, [isDarkMode]);

  return (
    <button onClick={handleToggle}>
      {isDarkMode ? "Dark " : "Light"} Mode
    </button>
  );
};