import React, { useState, useContext } from "react";
import { ResolumeContext } from "../utils/resolume_provider";
import Effects from "./Effects";
import Clips from "./Clips";
import StickyNavbar from "../Navbar/StickyNavbar";
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

        


    //ToDo: Effects (composition -> video -> VideoTrack -> effects -> VideoEffect)
    //ToDo: Clear all clips (POST /composition/layers/by-id/{layer-id}/clear})
    return (
        <main className="d-flex flex-column">
            <StickyNavbar tempocontroller={context.composition.tempocontroller} layer={context.composition.layers[0]} />
            <div className="border border-black">
            </div>
            <Clips clips={clips} />
        </main>
    );

}

export default Composition;