import React from "react";
import './Button.css'

export const Button = (props) => {

    return (
        <button
            onClick={props.handler}
            value={props.value}
            className={`button ${props.className}`}
        >
            {props.value}
        </button>
    )
}