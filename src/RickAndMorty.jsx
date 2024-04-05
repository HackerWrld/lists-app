import React, { useState, useEffect } from 'react';

const RickAndMorty = ()=>{
const [characters, setCharacters] = useState([])
const fetchCharacters = async ()=>{
    const response = awaitfetch ("https: //rickandmortyapi.com/api/character")
    const data = await response.json()
    setCharacters(data.results)
}

useEffect (()=>{
    fetchCharacters()

}, [])

return (

    <div>
        {characters.map((character)=>{
            <div key={character.id}>
                <div>{character.name}</div>
                <img src={character.image} alt={character.name} />

            </div>
        })}
    </div>

);
}

export default RickAndMorty