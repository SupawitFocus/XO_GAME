import React from "react";

const Square = ({value, onClick}) =>{
    return(
        <button className='box' onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;