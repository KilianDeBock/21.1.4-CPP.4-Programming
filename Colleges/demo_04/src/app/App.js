import "./App.css";
import { useState } from "react";
import { DefaultMenu, TagCloud, ThemeToggle, UserMenu } from "./components";

import tagsData from "./data/tagcloud.json";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleThemeChange = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
  };

  return (
    <div className={`app${isDarkMode === true ? " app--is-dark-mode" : ""}`}>
      <ThemeToggle onThemeChanged={handleThemeChange} isDarkMode={isDarkMode} />
      <ThemeToggle onThemeChanged={handleThemeChange} isDarkMode={isDarkMode} />
      <ThemeToggle onThemeChanged={handleThemeChange} isDarkMode={isDarkMode} />
      <TagCloud tags={tagsData} />
      {isLoggedIn ? <UserMenu /> : <DefaultMenu />}
    </div>
  );
};

export default App;
