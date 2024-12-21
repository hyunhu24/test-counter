import React from "react";

const MinusBtn = ({handleMinusBtn}) => {
    return(
        <>
        <button 
        type="button" 
        className="countBtn"
        onClick={handleMinusBtn}
        >
            <i class="fa-solid fa-minus" />
        </button>
        </>
    );
}

export default MinusBtn;