import './App.css';
import Search from './components/Search';
import Grid from './components/Grid'
import axios from 'axios'
import React, { useState, useEffect } from 'react';

let index = []

function App() {
  const [items, setItems] = useState([])
  const [count, setCount] = useState([])
  const [pokemonUrl, setPokemonUrl] = useState([])


  useEffect(() => {
    const fetchPokemones = async () => {
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon/")
      setItems(result.data.results);

    }
    fetchPokemones();
  }, []);


  const itemes = items.map((item) => (
    index = item.url.split('/')[6]


  ))
  console.log(itemes);
  return (
    <div className="App">
      <Search />

      <Grid items={items} indexes={itemes} />
    </div>
  );
}

export default App;
