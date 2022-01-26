import React, { useContext } from 'react';
import { ResolumeContext } from "../utils/resolume_provider";
import Parameter from "../utils/parameter";

/**
 * Displays current info on very top strip of navbar
 * @param {layer, tempocontroller} param0 
 * @returns 
 */
function InfoBanner({ layer, tempocontroller, transition }) {
    const context = useContext(ResolumeContext);
    const clear = () => context.action('trigger', `/composition/layers/by-id/${layer.id}/clear`);

    const output = (
        <div className="effect-item mb-3 align-top">
            <div role="button" className={`btn btn-danger`} onClick={clear}>Clear Clip</div>
            <span className="banner-display">Transition: {transition.duration.value}s</span>
            <span className="banner-display">
                <Parameter
                    view_type="number"
                    view={{ control_type: 'spinner' }}
                    name="BPM"
                    parameter={tempocontroller.tempo}
                    hidelabel="yes"
                />
                BPM
            </span>
        </div>);
    return (<>{output}</>);
}

export default InfoBanner;