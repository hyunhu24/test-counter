import React from "react";

const Counter = ({countValue}) => {
    return(
        <>
        <input 
        className="counter" 
        type="text" 
        value={countValue}
        readOnly
        />
        </>
    );
}

export default Counter;