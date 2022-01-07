import React, { Fragment, useState } from "react";
import "./UseState.css"

const UseState = () => {
    const [color, setColor] = useState('blue');
    const [count, setCount] = useState(5)

    const changeColorHandler = () => {
        if (color === 'blue') {
            setColor('red')
        } else {
            setColor('blue')
        }
    }

    const addCount = () => {
        setCount(prevCount => prevCount + 1)

    }

    const minusCount = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <Fragment>
            <button onClick={changeColorHandler}>Cambiar de color</button>
            <br />
            <label className={color}>Texto que cambia de color</label>

            <br />
            <br />

            <button onClick={addCount}>+</button>
            <label>{count}</label>
            <button onClick={minusCount}>-</button>
            <br />
        --------------------------
        </Fragment>
    )
}

export default UseState;