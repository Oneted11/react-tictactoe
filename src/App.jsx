import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [active, setActive] = useState();
  const [status, setStatus] = useState(`It's ${player}'s turn`);

  function handleCellPlayed() {}
  function handlePlayerChange() {}
  function handleResultValidation() {}
  function handleCellClick() {}
  function handleRestartGame() {}

  return (
    <div className="App">
      <h1 className="game--title">Tic Tac Toe</h1>
      <div className="game--container">
        <div data-cell-index="0" className="cell"></div>
        <div data-cell-index="1" className="cell"></div>
        <div data-cell-index="2" className="cell"></div>
        <div data-cell-index="3" className="cell"></div>
        <div data-cell-index="4" className="cell"></div>
        <div data-cell-index="5" className="cell"></div>
        <div data-cell-index="6" className="cell"></div>
        <div data-cell-index="7" className="cell"></div>
        <div data-cell-index="8" className="cell"></div>
      </div>
      <h2 className="game--status">{status}</h2>
      <button className="game--restart">Restart Game</button>
    </div>
  );
}

export default App;
