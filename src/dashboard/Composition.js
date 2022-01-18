import React, { useContext } from "react";
import { ResolumeContext } from "../utils/resolume_provider";
import TempoControl from "./TempoControl";
import ClipChange from "./ClipChange";
import ColorBar from "./ColorBar";
import MainButtonsDisplay from "./MainButtonsDisplay";
import ErrorAlert from "../layout/ErrorAlert";

/**
 * Component that renders the entire composition
 */
function Composition() {
    const context = useContext(ResolumeContext);

    return (
        <main className="d-flex flex-column">
            <div>
                {context.composition.tempocontroller.tempo &&
                    <TempoControl tempocontroller={context.composition.tempocontroller} />}
            </div>
        </main>
    );

}

export default Composition;