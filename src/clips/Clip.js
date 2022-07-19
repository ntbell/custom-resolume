import React, { useContext } from "react";
import { ResolumeContext } from "../utils/resolume_provider";
import PropTypes from "prop-types";

// Component for rendering a single clip
function Clip(props) {
    const context = useContext(ResolumeContext);

    // Define connection function
    const connect = (down) => {
        context.action(
            "trigger",
            `/composition/clips/by-id/${props.id}/connect`,
            down
        );
    };

    // Automatically set transport to bpm sync on all clips
    context.parameters.update_parameter(props.transporttype.id, "BPM Sync");

    /**
     * Connected has 5 possible states
     * "Empty", "Disconnected", "Previewing", "Connected", "Connected & previewing"
     */
    const connected = props.connected.index >= 3;
    const src = context.clip_url(props.id, props.last_update);
    // If we want to display the clip names...
    // const name = props.name.value.length > 23 ? props.name.value.substring(0, 22) + "..." : props.name.value;

    return (
        <div className={`clip ${connected ? "connected" : "none"}`}>
            <img
                src={src}
                onMouseDown={() => connect(true)}
                onMouseUp={() => connect(false)}
                alt={props.name.value}
            />
            {/* Include clip name?          
            {name}
            */}
        </div>
    );
}

// Property declaration for Clip component
Clip.propTypes = {
    last_update: PropTypes.string.isRequired,
    name: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    transporttype: PropTypes.object.isRequired,
};

export default Clip;
