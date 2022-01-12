import React, { useEffect, useState } from "react";
import { characters } from "../api/charactersApi";
import './CardList.scss' 

export default () => {
    
    const [charactersArray, setCharactersArray] = useState([]);

    useEffect(()=>{
        characters.then(response => {
            setCharactersArray(response.characters.results)
        })
    },[])
    return (
        <div className="character-list--container">
            <h1>List of all Rick and Morty Characters</h1>
            <div className="character-list--card-container">
                { charactersArray.map((character, idx)=>{
                    return(
                        <div key={idx} className="character-list--card">
                            <img src={character.image}/>
                            <h4>{character.name}</h4>
                        </div>
                    )
                    })}
            </div>
        </div>
    )
}