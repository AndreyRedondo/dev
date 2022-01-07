import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Grid from './Grid';



const Search = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <div>
                <h1>Pokedex</h1>
                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                />
            </div>
           
        </div>
    )
}

export default Search
