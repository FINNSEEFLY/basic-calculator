import React from "react";
import {Control} from "../Control/Control";
import './ControlPanel.css'

export const ControlPanel = (props) => {
    return (
        <div className="control-panel">
            {
                props.operations.map(
                    (x) =>
                        <Control
                            value={x.symbol}
                            handler={() => x.handler()}
                            className=""
                        />
                )
            }
        </div>
    )
}