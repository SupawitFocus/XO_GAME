import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, gridC }) => (
  <div className="boardH" style={{gridTemplateColumns: gridC}}>
    {squares.map((squares, i) => (
      <Square key={i} value={squares} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
