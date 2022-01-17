import React, { useEffect, useState } from "react";
import ClipChange from "./ClipChange";
import ColorBar from "./ColorBar";
import MainButtonsDisplay from "./MainButtonsDisplay";
import ErrorAlert from "../layout/ErrorAlert";
import TempoControl from "./TempoControl";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard() {
  const [info, setInfo] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [updateError, setUpdateError] = useState(null);
  const [bpm, setBpm] = useState(120);
  const [clipIndex, setClipIndex] = useState(1);

  useEffect(loadDashboard, []);

  function loadDashboard() {
    const abortController = new AbortController();
    
    //api calls
    
    return () => abortController.abort();
  }
  
  return (
    <main className="d-flex flex-column">
      <ErrorAlert error={loadError} />
      <h1 className="text-center">Custom Resolume</h1>
      {info ? <p>{info.name}</p> : null}
      <TempoControl />
      <ClipChange />
      <MainButtonsDisplay />
      <ColorBar />
    </main>
  );
}

export default Dashboard;
