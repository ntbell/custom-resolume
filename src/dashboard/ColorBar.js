import React from "react";
import { useHistory } from "react-router-dom";
import { updateReservationStatus } from "../utils/api";

function ReservationsDisplay({ reservations, reload, setLoadError }) {
    const history = useHistory();

    const askConfirmation = async (reservation) => {
        const reservation_id = reservation.reservation_id;
        if (window.confirm("Do you want to cancel this reservation? This cannot be undone.")) {
            setLoadError(null);
            updateReservationStatus(reservation_id, "cancelled").then(reload).catch(setLoadError);
        }
    }

    const checkStatus = (reservation) => reservation.status === "booked" ? (false) : (true);

    const formattedReservations = reservations.map((reservation) => (
        <div key={reservation.reservation_id} role="listitem" className="res-container res-bg border border-dark rounded m-2">
            <p className="res-components"><u>First Name</u><span>{reservation.first_name}</span></p>
            <p className="res-components"><u>Last Name</u><span>{reservation.last_name}</span></p>
            <p className="res-components"><u>Mobile Number</u><span>{reservation.mobile_number}</span></p>
            <p className="res-components"><u>Date</u><span>{reservation.reservation_date}</span></p>
            <p className="res-components"><u>Time</u><span>{reservation.reservation_time}</span></p>
            <p className="res-components"><u>People</u><span>{reservation.people}</span></p>
            <p className="res-components"
                data-reservation-id-status={reservation.reservation_id}>
                <u>Status</u><span>{reservation.status}</span>
            </p>
            <div role="group" className="res-buttons">
                <button
                    type="button"
                    className="btn btn-light btn-block m-0"
                    href={`/reservations/${reservation.reservation_id}/edit`}
                    disabled={checkStatus(reservation)}
                    onClick={() => history.push(`/reservations/${reservation.reservation_id}/edit`)}>
                    Edit
                </button>
                {reservation.status === "booked" ?
                    <button
                        type="button"
                        className="btn btn-primary btn-block m-0"
                        href={`/reservations/${reservation.reservation_id}/seat`}
                        disabled={checkStatus(reservation)}
                        onClick={() => history.push(`/reservations/${reservation.reservation_id}/seat`)}>
                        Seat
                    </button> : (null)}
                <button
                    type="button"
                    className="btn btn-secondary btn-block m-0"
                    data-reservation-id-cancel={reservation.reservation_id}
                    onClick={() => askConfirmation(reservation)}>
                    Cancel
                </button>
            </div>
        </div>
    ));

    return (<section role="list">{formattedReservations}</section>);
}

export default ReservationsDisplay;