import React from "react";

export default function Ingredient({ list }) {
    return (
        <ul className="ingredients">
            {list.map((ingredient, i) => (
                // TODO replace: <li key={i}>{...ingredient}</li>
                <li key={i}>
                {ingredient.name}
                {ingredient.measurement}
                {ingredient.amount}
                </li>
                // <li key={i}>{ingredient}</li>
            ))}
        </ul>
    );
}