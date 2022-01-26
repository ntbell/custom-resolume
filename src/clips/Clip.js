import React, { useContext } from 'react'
import { ResolumeContext } from '../utils/resolume_provider';
import PropTypes from 'prop-types';
import Parameter from "../utils/parameter";

/**
  * Component for rendering a clip, responds to clicks
  * to trigger the clip.
*/
function Clip(props) {
  // get access to the resolume provider for triggering actions
  const context = useContext(ResolumeContext);

  // define connection function
  const connect = (down) => { context.action('trigger', `/composition/clips/by-id/${props.id}/connect`, down); };

  // automatically set transport to bpm sync on all clips
  context.parameters.update_parameter(props.transporttype.id, "BPM Sync")

  /**
    * Connected has 5 possible states 
    * "Empty", "Disconnected", "Previewing", "Connected", "Connected & previewing"
    */
  const connected = props.connected.index >= 3;
  const src = context.clip_url(props.id, props.last_update);
  //const name = props.name.value.length > 23 ? props.name.value.substring(0, 22) + "..." : props.name.value;

  return (
    <div className={`clip ${connected ? 'connected' : 'none'}`}>
      <img
        src={src}
        onMouseDown={() => connect(true)}
        onMouseUp={() => connect(false)}
        alt={props.name.value}
      />
      {/* Include clip name?          
            {name}
            */}
    </div>
  )
}

/**
  * Property declaration for Clip component
  */
Clip.propTypes = {
  last_update: PropTypes.string.isRequired,
  name: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  transporttype: PropTypes.object.isRequired  
}

export default Clip;
