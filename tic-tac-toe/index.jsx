import { useEffect, useState } from "react";
import "./styles.css";

function Box({ value, onClick }) {
  return (
    <button onClick={onClick} className="box">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(boxes) {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winPatterns.length; i++) {
      const [x, y, z] = winPatterns[i];

      if (
        boxes[x] &&
        boxes[x] === boxes[y] &&
        boxes[x] === boxes[z]
      ) {
        return boxes[x];
      }
    }

    return null;
  }

  function handleClick(getCurrentBox) {
    let cpyBoxes = [...boxes];
    if (getWinner(cpyBoxes) || cpyBoxes[getCurrentBox]) return;
    cpyBoxes[getCurrentBox] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setBoxes(cpyBoxes);
  }

  function handleRestart() {
    setIsXTurn(true);
    setBoxes(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(boxes) && boxes.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (getWinner(boxes)) {
      setStatus(`Winner is ${getWinner(boxes)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [boxes, isXTurn]);

  console.log(boxes);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Box value={boxes[0]} onClick={() => handleClick(0)} />
        <Box value={boxes[1]} onClick={() => handleClick(1)} />
        <Box value={boxes[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Box value={boxes[3]} onClick={() => handleClick(3)} />
        <Box value={boxes[4]} onClick={() => handleClick(4)} />
        <Box value={boxes[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Box value={boxes[6]} onClick={() => handleClick(6)} />
        <Box value={boxes[7]} onClick={() => handleClick(7)} />
        <Box value={boxes[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
