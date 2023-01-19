import React, { useState } from "react";

const ValueSize = (props) => {
  const [size, setSize] = useState(0);
  //const [history, setHistory] = useState([Array(9).fill('')]);

  const saveSize = (event) => {
    event.preventDefault();
    const dataSize = Number(size);
    props.onAddItem(dataSize);
  };
  const inputSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <div className="boxnum">
        <form onSubmit={saveSize}>
          <label>
            Input Size :{" "}
            <input type={"text"} onChange={inputSize} id="number"></input>
          </label>
          <button
            type="submit"
            className="btn-reset"
            id="enter"
            onClick={(e) => {
              e.target.style.visibility = "hidden";
            }}
          >
            Enter
          </button>
          
        </form>
      </div>
    </>
  );
};

export default ValueSize;
