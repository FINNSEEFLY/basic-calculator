import React from "react";
import {Button} from "../Button/Button";
import './NumKey.css'

export const NumKey = (props) => {

    return (
        <Button
            className="num-key"
            handler={(e) => props.handler(props.value, e)}
            value={props.value}
        />
    )
}