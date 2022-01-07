import React, { useState, useEffect } from "react";
import axios from 'axios';

const Api = () => {
    const [items, setItems] = useState([]);



    return (
        <div>
        {
                useEffect(() => {
                    const fetchItems = async () => {
                        const result = await axios.get("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
                        console.log(result.data);
                        setItems(result.data)
                    }
                })
        }
        </div>

    )
}

export default Api;