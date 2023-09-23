import React from "react";


function Cat({ name }) {
    return (
        <>
        <h1>The cat's name is {name}</h1>
        <p>He's good.</p>
    </>);
    // return <h1>The cat's name is {name}</h1>;
}
    // ReactDOM.render(<Cat name="Jungle" />, document.getElementById("root"));

export default Cat;