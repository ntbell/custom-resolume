import React from "react";
import Parameter from "../utils/parameter";

// Controls the BPM and all buttons associated with changing it
function TempoControl({ tempocontroller }) {
    return (
        <div className="effect-item">
            <div className="d-flex flex-column w-100">
                <div className="d-flex">
                    <Parameter
                        name="BPM"
                        parameter={tempocontroller.tempo}
                        label="-1"
                        modifier={(value) => value - 1}
                    />
                    <Parameter
                        name="RESYNC"
                        parameter={tempocontroller.resync}
                    />
                    <Parameter
                        name="BPM"
                        parameter={tempocontroller.tempo}
                        label="+1"
                        modifier={(value) => value + 1}
                    />
                </div>
                <div className="d-flex w-100">
                    <Parameter
                        name="BPM"
                        parameter={tempocontroller.tempo}
                        label="128"
                        modifier={(value) => (value = 128)}
                    />
                    <Parameter
                        name="BPM"
                        parameter={tempocontroller.tempo}
                        label="140"
                        modifier={(value) => (value = 140)}
                    />
                    <Parameter
                        name="BPM"
                        parameter={tempocontroller.tempo}
                        label="150"
                        modifier={(value) => (value = 150)}
                    />
                    <Parameter
                        name="BPM"
                        parameter={tempocontroller.tempo}
                        label="174"
                        modifier={(value) => (value = 174)}
                    />
                </div>
            </div>
        </div>
    );
}

export default TempoControl;
