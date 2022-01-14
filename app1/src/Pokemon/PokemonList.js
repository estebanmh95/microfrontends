import { pokemonList } from "../api/pokemonApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './PokemonList.scss'

export default ( ) => {
    

    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        pokemonList.then(pokemons => {
            // setPokemons(pokemons.pokemons.results)
            console.log(pokemons)
        })
    },[])

    return(
        <div className="character-list--container">
            <h1>List of best Pokemons</h1>
            {/* <div className="character-list--card-container">
                { pokemons.map((character, idx)=>{
                    return(
                        <div key={idx} className="character-list--card">
                            <Link to={`pokemon/${character.name}`}>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx+201}.png`}/>
                            </Link>
                            <h4>{character.name}</h4>
                        </div>
                    )
                    })
                }
            </div> */}
        </div>
    )
}