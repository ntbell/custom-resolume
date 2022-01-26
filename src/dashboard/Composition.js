import React, { useContext } from "react";
import { ResolumeContext } from "../utils/resolume_provider";
import Clips from "../clips/Clips";
import StickyNavbar from "../Navbar/StickyNavbar";

/**
 * Component that renders the entire composition
 */
function Composition({ connection }) {
    const context = useContext(ResolumeContext);
    console.log(connection);

    const clips =
        Array.prototype.concat.apply([],                            // concatenate all arrays (which contain clips)
            context.composition.layers.map(layer => layer.clips)    // extract array of layers into an array of array of clips
        ).filter(clip => clip.connected.index !== 0);               // filter out all clips which have connected.index set to 0

    return (
        <>
            <main className="d-flex flex-column">
                {context.connected ?
                    (<>
                        <StickyNavbar layers={context.composition.layers} />
                        <Clips clips={clips} />
                    </>) : (<p>loading...</p>)
                }
            </main>
        </>
    );
}

export default Composition;