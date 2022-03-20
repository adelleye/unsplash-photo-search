import React from "react";
import "./style.css";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="container">
      <h1 className="container--title">Resplash</h1>
      <p className="container--text">
        Browse and search for images <br />
        Made with ❤️ by Tobi
      </p>
      <Search />
    </div>
  );
};

export default App;
