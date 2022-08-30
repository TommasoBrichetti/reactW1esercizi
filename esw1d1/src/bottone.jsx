import React from "react";

function Buttons(props) {
    const log = () => {
        console.log('hai premuto');
    }
    return(
        <button className="buttons" onClick={log}>{props.contenuto}</button>
    )
}


export default Buttons;