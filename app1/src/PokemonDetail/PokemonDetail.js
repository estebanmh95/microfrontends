import React, { useEffect, useState } from "react";
import { pokemonSpeficic } from "../api/pokemonApi";

export default (props) => {

    // console.log(pokemonSpeficic(props.match.params.id))

    const [pokemon, setPokemon] = useState({"name":"Pineco", "sprites":{"front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png"}})
    useEffect(()=>{
        pokemonSpeficic(props.match.params.id).then(resp =>{
            // console.log(resp)
            setPokemon(resp)
        })
    },[])

    return(
        <div className="character-list--card">
            <img src={pokemon.sprites?.front_shiny}/>
            <h4>{pokemon.name}</h4>
            {/* <h4>{pokemon.sprites?.front_shiny}</h4> */}
        </div>
    )
}