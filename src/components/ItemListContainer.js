import React from 'react'
import "../styles/nav.css";

const ListItemContainer = (props) => {
    return (
        <>
            <p className="parrafo">{props.greetings[0]}</p>
            <p className="parrafo">{props.greetings[1]}</p>
            <p className="parrafo">{props.greetings[2]}</p>
            <p className="parrafo">{props.greetings[3]}</p>
            <p className="parrafo">{props.greetings[4]}</p>            
        </>
    )
}

export default ListItemContainer