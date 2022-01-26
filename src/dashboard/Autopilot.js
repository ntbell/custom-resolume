import React, { useContext } from 'react';
import Parameter from "../utils/parameter";
import { ResolumeContext } from "../utils/resolume_provider";

/**
 * Autopilot component
 * @param {autopilot} param0 
 * @returns 
 */
function Autopilot({ autopilot }) {
    const context = useContext(ResolumeContext);
    const handle_reset = (id) => { context.parameters.reset_parameter(id); }

    let output = null;
    if (autopilot) {
        output = (
            <div className="effect-item">
                <span className="label" onDoubleClick={() => handle_reset(autopilot.target.id)}>Autopilot</span>
                <Parameter
                    name="Target"
                    key={autopilot.target.id}
                    id={autopilot.target.id}
                    parameter={autopilot.target}
                />
            </div>
        );
    }

    return (
        <>
            {output}
        </>
    );
}

export default Autopilot;