import React, { useContext } from "react";
import { ResolumeContext } from "../utils/resolume_provider";
import ParameterMonitor from "../utils/parameter_monitor";
import Parameter from "../utils/parameter";

//ToDo: Add a few default FX (polark, mirror, mirrorquad, ..?)
//ToDo: Add FX customization tool
function Effects({ layer }) {
    const context = useContext(ResolumeContext);

    const clear = () => context.action('trigger', `/composition/layers/by-id/${layer.id}/clear`);
    const handle_reset = (id) => { context.parameters.reset_parameter(id); }
    
    //Autopilot functionality
    //ToDo: Break into own component
    let autopilot = null;
    if (layer.autopilot) {
        autopilot = (
            <div>
                <span className="label" onDoubleClick={() => handle_reset(layer.autopilot.target.id)}>Autopilot</span>
                <Parameter
                    name="Target"
                    key={layer.autopilot.target.id}
                    id={layer.autopilot.target.id}
                    parameter={layer.autopilot.target}
                />
            </div>
        );
    }

    //Clip transition functionality (Duration & Blend Mode)
    //ToDo: Break into own component
    let transition = null;
    if (layer.transition) {
        transition = (
            <div>
                <div>
                    <span className="label" onDoubleClick={() => handle_reset(layer.transition.duration.id)}>Duration</span>
                    <Parameter
                        name="Duration"
                        key={layer.transition.duration.id}
                        id={layer.transition.duration.id}
                        parameter={layer.transition.duration}
                    />
                </div>
                <div>
                    <span className="label" onDoubleClick={() => handle_reset(layer.transition.blend_mode.id)}>Blend Mode</span>
                    <Parameter
                        name="Blend Mode"
                        key={layer.transition.blend_mode.id}
                        id={layer.transition.blend_mode.id}
                        parameter={layer.transition.blend_mode}
                    />
                </div>
            </div>
        );
    }  

    return (
        <>
            <div className={`btn btn-danger`} onClick={clear}>Clear Clip</div>
            {autopilot}
            {transition}
        </>
    );
}

export default Effects;