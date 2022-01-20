import React, { useState, useEffect } from "react";
import TempoControl from "../dashboard/TempoControl";
import Effects from "../dashboard/Effects";
import "./Navbar.css";

function StickyNavbar({ tempocontroller, layer }) {
    const [show, setShow] = useState(false);
    const handleScroll = () => setShow(window.pageYOffset > 50);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
    }, []);

    console.log(layer);

    return (
        <div className={`nav ${show && 'scrollNav'}`}>
            <p>Effects</p>
            {layer && <Effects layer={layer} />}
            {tempocontroller.tempo && <TempoControl tempocontroller={tempocontroller} />}
        </div>
    );
}

export default StickyNavbar;