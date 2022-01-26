import React, { useContext } from "react";
import { ResolumeContext } from "../utils/resolume_provider";
import InfoBanner from "../dashboard/InfoBanner";
import Autopilot from "../dashboard/Autopilot";
import Transition from "../dashboard/Transition";
import TempoControl from "../dashboard/TempoControl";

//ToDo: Add a few default FX (polark, mirror, mirrorquad, ..?)
//ToDo: Add FX customization tool
function Effects({ layer }) {
    const context = useContext(ResolumeContext);

    return (
        <div className="effect-container">
            <InfoBanner layer={layer} tempocontroller={context.composition.tempocontroller} transition={layer.transition} />
            <Autopilot autopilot={layer.autopilot} />
            <Transition transition={layer.transition} />
            <TempoControl tempocontroller={context.composition.tempocontroller} />
        </div>
    );
}

export default Effects;