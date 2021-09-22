import React from "react";
import './Screen.css'

export const Screen = (props) => {
    return (
        <input className="screen" type="text" value={props.value}/>
    )
}