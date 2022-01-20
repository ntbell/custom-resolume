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
            <div className={`button off`} onMouseDown={clear}>Clear</div>
            {autopilot}
            {/* <ParameterMonitor.Single parameter={layer.bypassed} render={bypassed => (
                <div className={`button ${bypassed.value ? 'on' : 'off'}`} onMouseDown={() => set_bypass(!bypassed.value)}>Mute Display</div>
            )} /> */}
        </>
    );
}

export default Effects;