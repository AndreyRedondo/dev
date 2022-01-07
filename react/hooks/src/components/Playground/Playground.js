import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

const Effect = () => {
    const [text, setText] = useState('')

    const textChangeHandler = (e) => {
        setText(e.target.value)
    }
    return (
        <Fragment>
            <input type="text" onChange={textChangeHandler}></input>
            <br></br>
            <label >Name is {text}</label>
        </Fragment>
    )
}

export default Effect;