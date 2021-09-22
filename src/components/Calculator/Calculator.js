import React from "react";
import {Screen} from "../Screen/Screen";
import {Numpad} from "../Numpad/Numpad";
import {ControlPanel} from "../ControlPanel/ControlPanel";
import './Calculator.css'
import {ClearButton} from "../ClearButton/ClearButton";
import {useCalculation} from "../../hooks/useCalculation";

export const Calculator = () => {
    const {value, clearHandler, numKeyHandler, operations} = useCalculation()

    return (
        <div className="calculator">
            <Screen value={value}/>
            <ClearButton handler={clearHandler}/>
            <Numpad handler={numKeyHandler}/>
            <ControlPanel operations={operations}/>
        </div>
    )
}