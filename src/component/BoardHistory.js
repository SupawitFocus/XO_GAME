import React from "react";
import Square from "./Square";

const Board = ({ squares, gridC }) => (
  <div className="boardH" style={{gridTemplateColumns: gridC}}>
    {squares.map((squares, i) => (
      <Square key={i} value={squares} />
    ))}
  </div>
);

export default Board;
