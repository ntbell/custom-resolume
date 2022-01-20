import React, { useContext } from "react";
import { ResolumeContext } from "../utils/resolume_provider";
import ParameterMonitor from "../utils/parameter_monitor";
import Parameter from "../utils/parameter";


function Effects({ layer }) {
    const context = useContext(ResolumeContext);

    //const set_bypass = bypassed => context.parameters.update_parameter(layer.bypassed.id, bypassed);
   // const set_autopilot = autopilot => context.parameters.update_parameter(layer.autopilot, autopilot);
    const clear = () => context.action('trigger', `/composition/layers/by-id/${layer.id}/clear`);
    const handle_reset = (id) => { context.parameters.reset_parameter(id); }
    
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


    
    //Get effects pre-loaded into layer (or load effects manually?)
    //Turn into buttons
    /*  
    layer.audio
    layer.autopilot
    layer.bypassed
    layer.transition
    */
    return (
        <>
            <div className={`btn btn-danger`} onClick={clear}>Clear Clip</div>
            {autopilot}
            {transition}
            {/* <ParameterMonitor.Single parameter={layer.bypassed} render={bypassed => (
                <div className={`button ${bypassed.value ? 'on' : 'off'}`} onMouseDown={() => set_bypass(!bypassed.value)}>Mute Display</div>
            )} /> */}
        </>
    );
}

export default Effects;