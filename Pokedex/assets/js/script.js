const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const fetchPokemon = () => {
    const pokemonPromises = []

    for (let id = 1; id <= 151; id++) {
        pokemonPromises.push(fetch(getPokemonUrl(id)).then(response => response.json()))
    }
    
    Promise.all(pokemonPromises)
        .then(pokemons => {

            const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)
                accumulator += /*html*/`
                    <li class="card ${types[0]}">
                        <img 
                            class="card-image" 
                            alt="${pokemon.name}" src="https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png"
                        />
                        <h2 class="card-title">${pokemon.id} . ${pokemon.name}</h2>
                        <p class='card-subtitle'>${types.join(' | ')}</p>
                    </li>
                    `
                return accumulator
            }, '')

            const ul = document.querySelector('[data-js="pokedex"]')

            ul.innerHTML = lisPokemons
        })
} 

fetchPokemon()