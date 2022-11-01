const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatorPokemonPromises = () => Array(151).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const generatorHtml = pokemons => pokemons.reduce((accumulator, { name, id, types}) => {
    const elementTypes = types.map(typeInfo => typeInfo.type.name)

    accumulator += /*html*/`
        <li class="card ${elementTypes[0]}" id='pokemon_${id}'>
            <img 
                class="card-image" 
                alt="${name}" src="https://cdn.traction.one/pokedex/pokemon/${id}.png"
            />
            <h2 class="card-title">${id} . ${name}</h2>
            <p class='card-subtitle'>${elementTypes.join(' | ')}</p>
        </li>
        `
    return accumulator
}, '')

const insertPokemonsIntoPage = pokemons => {
    const ul = document.querySelector('[data-js="pokedex"]')
    document.querySelector('#loading-placeholder').classList.add("hide")
    ul.innerHTML = pokemons
}

const pokemonPromises = generatorPokemonPromises()
Promise.all(pokemonPromises)
    .then(generatorHtml)
    .then(insertPokemonsIntoPage)


