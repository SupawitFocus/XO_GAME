import React, { useState } from "react";
import Board from "./Board";
import ValueSize from "./ValueSize";
import { createCombinations, calWinner } from "../Calwinner";
import { db } from "../utils/firebase";
import { set, ref } from "firebase/database";


const Game = () => {
  let [history, setHistory] = useState([Array(0).fill("")]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [size, setSize] = useState(0);
  let [board, setBoard] = useState("");
  const xO = xIsNext ? "X" : "O";
  const Ox = !xIsNext ? "X" : "O";
  let winner = calWinner(history[stepNumber], Ox);
  
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = history[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const onAddNewItem = (NewValue) => {
    let a = NewValue ** 2;
    history[0] = [];
    setSize(NewValue);
    console.log(size);
    for (let i = 0; i < a; i++) {
      history[0].push("");
    }
    setBoard("repeat(" + NewValue + ", auto)");
    createCombinations(history[0].length, NewValue);
  };
  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button className="btn-history" onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  let status;

  const setData = () => {
    set(ref(db, "history/" + new Date().getTime()), {
      size: size,
      history: history[stepNumber],
      winner: status,
      date: new Date().toLocaleDateString("en-US"),
      time: new Date().toLocaleTimeString("en-US")
    });
  };

  if(winner){
    status = winner + ' Winner';
    setData();
  }else if(history[stepNumber].length !== 0 && history[stepNumber].find(e => e === "") === undefined){
    status = "Draw"
    setData();
  }

  return (
    <>
      <ValueSize onAddItem={onAddNewItem} />
      <Board
        squares={history[stepNumber]}
        onClick={handleClick}
        gridC={{ board }}
      />
      <div>
        <h3 className="mgt-10">History</h3>
        {renderMoves()}
        <h3>{status ? "Result: " + status : "Next Player: " + xO}</h3>
      </div>
    </>
  );
};

export default Game;
