import React from "react";

export default function Instructions({amount, measurement, name}) {
    return (
        <li>
            {amount} {measurement} {name}
        </li>
    );
}