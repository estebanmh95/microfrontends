const pokemonList = fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=200')
    .then(resp=>resp.json())
    .then(pokemons => {
        return {
            pokemons: pokemons
        }
    })


const pokemonSpeficic = (id) => {
    // console.log(id)
    const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(resp=>resp.json())
    .then(pokemons => {
        return pokemons
    })

    return pokemon
}
export {pokemonList}
export {pokemonSpeficic}