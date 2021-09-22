import React from "react";
import {Button} from "../Button/Button";
import './Control.css'

export const Control = (props) => {

    return (
        <Button
            className={`control ${props.className}`}
            value={props.value}
            handler={props.handler}
        />
    )
}