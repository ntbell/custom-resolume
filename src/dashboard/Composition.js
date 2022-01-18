import React, { useState, useContext } from "react";
import { ResolumeContext } from "../utils/resolume_provider";
import TempoControl from "./TempoControl";
import Clips from "./Clips";
import ParameterMonitor from "../utils/parameter_monitor"; 

/**
 * Component that renders the entire composition
 */
function Composition() {
    const context = useContext(ResolumeContext);

    const clips =
        Array.prototype.concat.apply([],                            // concatenate all arrays (which contain clips)
            context.composition.layers.map(layer => layer.clips)    // extract array of layers into an array of array of clips
        ).filter(clip => clip.connected.index !== 0);               // filter out all clips which have connected.index set to 0

    return (
        <main className="d-flex flex-column">
            <div>
                {context.composition.tempocontroller.tempo &&
                    <TempoControl tempocontroller={context.composition.tempocontroller} />}
                { }
            </div>
            <div className="d-flex flex-row">
                <Clips clips={clips} />
            </div>
        </main>
    );

}

export default Composition;