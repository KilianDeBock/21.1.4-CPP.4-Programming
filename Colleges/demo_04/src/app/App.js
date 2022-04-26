import "./App.css";
import { useState } from "react";
import { DefaultMenu, TagCloud, UserMenu } from "./components";

import tagsData from "./data/tagcloud.json";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <TagCloud tags={tagsData} />
      {isLoggedIn ? <UserMenu /> : <DefaultMenu />}
    </div>
  );
};

export default App;
