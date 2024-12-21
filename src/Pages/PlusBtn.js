import React from "react";

const PlusBtn = ({handlePlusBtn}) => {
    return(
        <>
        <button 
        type="button" 
        className="countBtn"
        onClick={handlePlusBtn}
        >
            <i class="fa-solid fa-plus" />
        </button>
        </>
    );
}

export default PlusBtn;