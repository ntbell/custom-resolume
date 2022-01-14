import React, { useEffect, useState } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import ReservationsDisplay from "./ReservationsDisplay";
import TablesDisplay from "./TablesDisplay";
import DateButtons from "./DateButtons";
import { listReservations, listTables } from "../utils/api";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [tables, setTables] = useState([]);
  const [loadError, setLoadError] = useState(null);

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setTables([]);
    setReservations([]);
    setLoadError(null);

    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setLoadError);
    listTables(abortController.signal)
      .then(setTables)
      .catch(setLoadError);

    return () => abortController.abort();
  }

  return (
    <main className="bg-light">
      <ErrorAlert error={loadError} />
      <div className="d-md-flex flex-column mb-2">
        <h1 className="text-center"><u>Dashboard</u></h1>
        <h2 className=" mb-0 text-center">Reservations for</h2>
        <h3 className="text-center">{date}</h3>
        <DateButtons date={date} />
        {reservations.length > 0 ?
          <ReservationsDisplay reservations={reservations} reload={loadDashboard} setLoadError={setLoadError} />
          :
          <h4 className="m-2 p-2 border border-dark rounded res-bg text-center">No Reservations Today</h4>}
        <TablesDisplay tables={tables} loadDashboard={loadDashboard} setLoadError={setLoadError} />
      </div>
    </main>
  );
}

export default Dashboard;
