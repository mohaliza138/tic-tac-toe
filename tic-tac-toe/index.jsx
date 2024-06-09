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
