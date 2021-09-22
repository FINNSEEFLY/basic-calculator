import {useRef, useState} from "react";

export const useCalculation = () => {
    const [firstArgument, setFirstArgument] = useState('0')
    const [secondArgument, setSecondArgument] = useState(0);
    const operation = useRef(null);

    const setOperation = (o) => operation.current = o;

    const numKeyHandler = (value) => {
        firstArgument === '0'
            ? setFirstArgument(value.toString())
            : setFirstArgument(firstArgument.toString() + value.toString());
    }

    const division = (secondArgument, firstArgument) => parseInt(secondArgument) / parseInt(firstArgument);

    const addition = (secondArgument, firstArgument) => parseInt(secondArgument) + parseInt(firstArgument)

    const subtraction = (secondArgument, firstArgument) => parseInt(secondArgument) - parseInt(firstArgument);

    const divisionHandler = () => {
        performPreviousOperation()

        setOperation(division)
    }

    const additionHandler = () => {
        performPreviousOperation()

        setOperation(addition)
    }

    const subtractionHandler = () => {
        performPreviousOperation()

        setOperation(subtraction)
    }

    const equalityHandler = () => {
        if (operation.current != null) {
            setFirstArgument(operation.current(secondArgument, firstArgument))
            setSecondArgument(0);
            setOperation(null)
        }
    }

    const performPreviousOperation = () => {
        if (operation.current != null) {
            setSecondArgument(operation.current(secondArgument, firstArgument))
        } else {
            setSecondArgument(firstArgument)
        }
        setFirstArgument('0');
    }

    const clearHandler = () => {
        setFirstArgument('0');
        setSecondArgument(0);
        operation.current = null;
    }

    return {
        value: firstArgument,
        numKeyHandler,
        clearHandler,
        operations: [
            {
                handler: divisionHandler,
                symbol: '\u00F7'
            },
            {
                handler: subtractionHandler,
                symbol: '-'
            },
            {
                handler: additionHandler,
                symbol: '+'
            },
            {
                handler: equalityHandler,
                symbol: '='
            }
        ]
    }
}