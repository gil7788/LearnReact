import StarRating from "./StarRating";
import { ColorContext } from '..'

import { FaTrash } from "react-icons/fa";
import { useContext } from "react";


export default function Color({ id, title, color, rating = 0 }) {
     const { removeColor, rateColor } = useContext(ColorContext);
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)}
        />
        </section>
    );
}