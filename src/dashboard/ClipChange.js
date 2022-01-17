import React from "react";

function ClipChange() {

    const next = () => {
        
    }

    const prev = () => {
        
    }

    return (
        <div className="d-flex" role="group">
            <button onClick={prev}>prev clip</button>
            <button onClick={next}>next clip</button>
        </div>
    );
}

export default ClipChange;