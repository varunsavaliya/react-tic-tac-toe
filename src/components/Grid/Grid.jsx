import { useState } from "react";
import Card from "../Card/Card";
import "../Grid/Grid.css";
import isWinner from "../../helpers/checkWinner";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(false); // true => O, false => X
  const [winner, setWinner] = useState(null);

  const play = (index) => {
    if (turn) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const win = isWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  };

  const resetGame = () => {
    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""));
  };
  return (
    <>
      <div className="grid-wrapper">
        {winner && (
          <>
            <h1 className="winner">Winner is: {winner}</h1>
            <button className="reset" onClick={resetGame}>Reset Game</button>
          </>
        )}
        <span className="turn-shower">Current turn: {turn ? "O" : "X"}</span>
        <div className="grid">
          {board.map((el, idx) => (
            <Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={el} index={idx} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Grid;
