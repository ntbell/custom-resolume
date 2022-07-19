import React, { useContext } from "react";
import { ResolumeContext } from "../utils/resolume_provider";
import Clips from "../clips/Clips";
import StickyNavbar from "../Navbar/StickyNavbar";

// Component that renders the entire composition
function Composition() {
    const context = useContext(ResolumeContext);

    /**
     * Concatenate all arrays (which contain clips)
     * Extract array of layers into an array of array of clips
     * Filter out all clips which have connected.index set to 0
     */
    const clips = Array.prototype.concat
        .apply(
            [],
            context.composition.layers.map((layer) => layer.clips)
        )
        .filter((clip) => clip.connected.index !== 0);

    return (
        <main className="d-flex flex-column">
            {context.connected ? (
                <>
                    <StickyNavbar layers={context.composition.layers} />
                    <Clips clips={clips} />
                </>
            ) : (
                <p>loading...</p>
            )}
        </main>
    );
}

export default Composition;
