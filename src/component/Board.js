import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, gridC }) => (
  <div className="board" style={{gridTemplateColumns: gridC.board}}>
    {squares.map((squares, i) => (
      <Square key={i} value={squares} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
