import React from "react";

export default function Ship({ ship, changeShipDetailsID }) {
    return (
        <div className="Ship">
            <button onClick={changeShipDetailsID}>#{ship.id}</button> ({ship.ship_class}) {ship.model}
        </div>
    );
}
