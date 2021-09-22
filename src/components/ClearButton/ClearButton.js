import React from "react";
import {Control} from "../Control/Control";
import './ClearButton.css'

export const ClearButton = (props) => {

    return (
        <Control
            className="clear-button"
            handler={props.handler}
            value="clear"
        />
    )
}