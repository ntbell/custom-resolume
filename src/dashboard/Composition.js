import React, { useState, useContext, useEffect } from "react";
import { ResolumeContext } from "../utils/resolume_provider";
import Clips from "./Clips";
import StickyNavbar from "../Navbar/StickyNavbar";

/**
 * Component that renders the entire composition
 */
function Composition({ connection, setConnection }) {
    const context = useContext(ResolumeContext);
    const clips =
        Array.prototype.concat.apply([],                            // concatenate all arrays (which contain clips)
            context.composition.layers.map(layer => layer.clips)    // extract array of layers into an array of array of clips
        ).filter(clip => clip.connected.index !== 0);               // filter out all clips which have connected.index set to 0

    return (
        <>
            <main className="d-flex flex-column">
                {context.connected ?
                    <>
                        <StickyNavbar tempocontroller={context.composition.tempocontroller} layer={context.composition.layers[0]} />
                        <Clips clips={clips} />
                    </>
                    : <><p>loading...</p></>
                }
            </main>
        </>
    );

}

export default Composition;