import React from 'react'

export default function Ship({ship}) {
    return (
        <div className="Ship">
            <button>#{ship.id}</button> ({ship.ship_class}) {ship.model}
        </div>
    )
}
