import React, { useContext } from "react";
import Parameter from "../utils/parameter";
import { ResolumeContext } from "../utils/resolume_provider";

// Component that manages transition duration and transition mode
// ToDo: Indicate that the transition is happening somehow
// ToDo: Create timer countdown while waiting for clip to transition?
function Transition({ transition }) {
    const context = useContext(ResolumeContext);
    const handle_reset = (id) => {
        context.parameters.reset_parameter(id);
    };

    // ToDo: Generate a random blend mode id when clicking on 'Random'
    // And every time the clip changes?
    // ToDo: The blend mode is a ParamChoice
    return (
        transition && (
            <>
                <div className="effect-item">
                    <span
                        className="label"
                        onDoubleClick={() =>
                            handle_reset(transition.blend_mode.id)
                        }
                    >
                        Mode
                    </span>
                    <Parameter
                        name="Blend Mode"
                        key={transition.blend_mode.id}
                        id={transition.blend_mode.id}
                        parameter={transition.blend_mode}
                    />
                </div>
                <div className="effect-item">
                    <Parameter
                        name="Duration"
                        parameter={transition.duration}
                        label="Transition -0.5s"
                        modifier={(value) => value - 0.5}
                    />
                    <Parameter
                        name="Duration"
                        parameter={transition.duration}
                        label="Transition +0.5s"
                        modifier={(value) => value + 0.5}
                    />
                </div>
            </>
        )
    );
}

export default Transition;
