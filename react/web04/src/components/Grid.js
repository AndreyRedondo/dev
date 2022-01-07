import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Grid.css"

let nameApi;
let index;
let url;
const arrayUrl = [];



const Data = ({ items, indexes }) => {
    console.log(indexes);
    const [pics, setPics] = useState([])
    useEffect(() => {
        items.map((item) => {

            const fetchPokemonPics = async () => {
                const result = await axios.get(item.url)
                arrayUrl.push(result.data.sprites.other.dream_world.front_default);
                setPics(result.data.sprites.other.dream_world.front_default)
                index = item.url.split('/')[6]
                // console.log(index);
            }
            //console.log(arrayUrl);
            fetchPokemonPics()
        })
    }, []);


    return (
        <div className='div-table'>
            <div>
                <div className='div-table-row'>
                    <div className='div-table-col'>
                        {items.map(item => (
                            <div key={Math.random(100)}>
                                {item.name}
                            </div>
                        ))}
                    </div>
                    <div className='div-table-col'>
                        {
                            indexes.map(index => (
                                <div>
                                    <img src={arrayUrl[index - 1]} className='img-poke' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Data
