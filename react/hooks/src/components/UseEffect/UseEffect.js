import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const UseEffect = () => {
    const [resources, setResources] = useState('posts')
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${resources}`)
            .then(response => response.data)
            .then(data => setItems(data))
    }, [resources])

    const selectResourceHandler = (resource) => {
        setResources(resource)
    }


    return (
        <Fragment>
            <button onClick={() => selectResourceHandler('posts')}>POST</button>
            <button onClick={() => selectResourceHandler('comments')}>COMMENTS</button>
            <button onClick={() => selectResourceHandler('users')}>USERS</button>
            <ul>
                {items.map(item => {
                    return <pre>{JSON.stringify(item)}</pre>
                })}
            </ul>
        </Fragment>
    )
}


export default UseEffect;