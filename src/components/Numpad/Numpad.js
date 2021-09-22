import React from "react";
import {NumKey} from "../NumKey/NumKey";
import './Numpad.css'

export const Numpad = (props) => {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3]

    return (
        <div className="numpad">
            {
                numbers.map(
                    (x) =>
                        <NumKey
                            value={x}
                            handler={props.handler}
                        />
                )
            }
        </div>
    )
}