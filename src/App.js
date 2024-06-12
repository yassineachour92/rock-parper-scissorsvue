import { useState } from "react";
import Game from "./components/game/Game.tsx";
import Header from "./components/Header.js/Header.tsx";

import "./App.css";

function App() {
  const [score,setScore]=useState(0)
  return (
    <div className="App">
      <Header  score={score} setScore={setScore}/>
      <Game score={score} setScore={setScore}/>
    </div>
  );
}

export default App;
