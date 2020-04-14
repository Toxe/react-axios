import React, { useState, useEffect } from "react";
import axios from "axios";
import Ship from "./Ship";
import ShipDetails from "./ShipDetails";
import RequestError from "./RequestError";

export default function ShipList() {
    const [ships, setShips] = useState([]);
    const [shipDetailsID, setShipDetailsID] = useState("");
    const [requestError, setRequestError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:3001/ships")
            .then((res) => setShips(res.data))
            .catch((error) => setRequestError(error));
    }, []);

    return (
        <div className="Container">
            <h1>Ship List</h1>
            {ships.map((ship) => (
                <Ship key={ship.id} ship={ship} changeShipDetailsID={() => setShipDetailsID(ship.id)} />
            ))}
            {requestError && <RequestError error={requestError} />}
            <ShipDetails shipDetailsID={shipDetailsID} />
        </div>
    );
}
