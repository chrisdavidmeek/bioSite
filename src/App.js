import React from "react";
import Me from "./components/Me";
import Hobbies from "./components/Hobbies";
import Favorites from "./components/Favorites";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Me />
      <Favorites />
      <Hobbies />
    </div>
  );
}

export default App;
