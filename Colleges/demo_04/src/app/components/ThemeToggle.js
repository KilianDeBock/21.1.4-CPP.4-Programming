import { useEffect, useState } from "react";

const ThemeToggle = ({ onThemeChanged, isDarkMode }) => {
  const [isToggled, setIsToggled] = useState(isDarkMode);

  const handleChange = (ev) => {
    setIsToggled(ev.target.checked);
  };

  useEffect(() => {
    if (typeof onThemeChanged === "function") {
      onThemeChanged(isToggled);
    }
  }, [isToggled]);

  useEffect(() => {
    setIsToggled(isDarkMode);
  }, [isDarkMode]);

  return <input type="checkbox" onChange={handleChange} checked={isToggled} />;
};

export default ThemeToggle;
