import React, { useState, useEffect } from "react";
import Ship from "./Ship";

export default function ShipList() {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        setShips([
            {
                id: 1,
                affiliation: "Rebel Alliance",
                category: "Starfighters",
                crew: 1,
                length: 13,
                manufacturer: "Incom Corporation",
                model: "T-65 X-Wing",
                roles: ["Space Superiority Starfighter", "Escort"],
                ship_class: "Starfighter",
            },
            {
                id: 2,
                affiliation: "Empire",
                category: "Starfighters",
                crew: 1,
                length: 7,
                manufacturer: "Sienar Fleet Systems",
                model: "TIE/LN Starfighter",
                roles: ["Space Superiority Starfighter"],
                ship_class: "Starfighter",
            },
            {
                id: 3,
                affiliation: "Empire",
                category: "Starfighters",
                crew: 1,
                length: 8,
                manufacturer: "Sienar Fleet Systems",
                model: "TIE/SA Bomber",
                roles: ["Bomber"],
                ship_class: "Space/Planetary Bomber",
            },
        ]);
    }, []);

    return (
        <div className="Container">
            {ships.map((ship) => (
                <Ship key={ship.id} ship={ship} />
            ))}
        </div>
    );
}
