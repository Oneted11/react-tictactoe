import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //state
  const [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [active, setActive] = useState(true);
  const [status, setStatus] = useState(`It's ${player}'s turn`);

  function handleCellPlayed(clickedCellIndex) {
    //state is immmutable so make copy of state
    let newState = [...game];
    //modify the copy of state with the new information
    newState[clickedCellIndex] = player;
    //set our modified copy of state to actual State
    setGame(newState);
  }

  function handlePlayerChange() {
    // let currentPlayer = player
    player === "X" ? setPlayer("O") : setPlayer("X");
    setStatus(`It's ${player}'s turn`);
  }

  function handleResultValidation() {
    // winning conditions
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let roundWon = false;
    //start logic
    //loop over all winning states
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      //select three array positions that represent winning conditions
      let a = game[winCondition[0]];
      let b = game[winCondition[1]];
      let c = game[winCondition[2]];
      //test is any of the winning condition positions are empty, another guard clause
      if (a === "" || b === "" || c === "") {
        continue;
      }
      //check if the winning conditions positions are filled by the same sign/player
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
    //what will happen if a player has won
    if (roundWon) {
      setStatus(`Player ${player} has won!`);
      setActive(false);
      return;
    }
    //round draw logic, check if all array positions are filled but none have won
    let roundDraw = !game.includes("");
    if (roundDraw) {
      setStatus(`Game ended in a draw!`);
      setActive(false);
      return;
    }
    //once everything has been checked setup next round play
    handlePlayerChange();
  }

  function handleCellClick(e) {
    const clickedIndex = e.target.id;
    // console.log(clickedIndex)
    //check if cell is already filled or the game is in inactive state i.e. guard clause
    if (game[clickedIndex] !== "" || !active) {
      return;
    }
    //if everything is fine proceed
    handleCellPlayed(clickedIndex);
    handleResultValidation();
  }
  function handleRestartGame() {
    console.log("game restarted");
  }

  return (
    <div className="App">
      <h1 className="game--title">Tic Tac Toe</h1>
      <div className="game--container">
        {game.map((cell, idx) => (
          <div key={idx} id={idx} className="cell" onClick={handleCellClick}>
            {game[idx]}
          </div>
        ))}
      </div>
      <h2 className="game--status">{status}</h2>
      <button className="game--restart" onClick={handleRestartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default App;
