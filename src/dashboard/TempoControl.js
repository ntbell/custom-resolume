import React from "react";
import Parameter from "../utils/parameter";

function TempoControl({ tempocontroller }) {

    return (
        <div className="tempo_control">
            <span>
                BPM
                <Parameter
                    view_type="number"
                    view={{ control_type: 'spinner' }}
                    name="BPM"
                    parameter={tempocontroller.tempo}
                    hidelabel="yes"
                />
            </span>
            <span>
                <Parameter
                    name="BPM"
                    parameter={tempocontroller.tempo}
                    label="-1"
                    modifier={value => value - 1}
                />
            </span>
            <span>
                <Parameter
                    name="BPM"
                    parameter={tempocontroller.tempo}
                    label="+1"
                    modifier={value => value + 1}
                />
            </span>
            <span>
                <Parameter
                    name="BPM"
                    parameter={tempocontroller.tempo}
                    label="/2"
                    modifier={value => value / 2}
                />
            </span>
            <span>
                <Parameter
                    name="BPM"
                    parameter={tempocontroller.tempo}
                    label="x2"
                    modifier={value => value * 2}
                />
            </span>
            <span>
                <Parameter
                    name="RESYNC"
                    parameter={tempocontroller.resync}
                />
            </span>
        </div>
    );
}

export default TempoControl;