import React from "react";

function TempoControl() {

    const increase = () => {
        
    }
    const decrease = () => {
       
    }

    return (
        <div role="group" className="d-flex flex-row">
            <button className="btn btn-secondary" onClick={decrease}>-</button>
            <button className="btn btn-secondary" onClick={increase}>+</button>
        </div>
    );
}

export default TempoControl;