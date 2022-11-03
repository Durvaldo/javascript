const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
const getPokemonFrontSprite = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

const generatorPokemonPromises = () => Array(151).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const generatorHtml = pokemons => pokemons.reduce((accumulator, { name, id, types}) => {
    const elementTypes = types.map(typeInfo => typeInfo.type.name)

    accumulator += /*html*/`
        <li class="card-pokemon ${elementTypes[0]}" onclick="pokemonSelecionado(${id})">
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


const pokemonSelecionado = id => {
    fetch(getPokemonUrl(id))
        .then(response => response.json())
        .then(generatorModal)
}

const generatorModal = pokemon => {
    console.log(pokemon)
    const elementTypes = pokemon.types.map(typeInfo => typeInfo.type.name)

    const modal = document.querySelector('#corpo-pokemon-modal')
    modal.innerHTML = ""
    modal.innerHTML = /*html*/`
        <div class="modal-content">
            <div class="modal-header ${elementTypes[0]}">
                <h5 class="modal-title" id="pokemon-title">${pokemon.id} . ${pokemon.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <img
                    class="card-image"
                    alt="${pokemon.name}" src="${getPokemonFrontSprite(pokemon.id)}"
                />
            </div>
            <div class="modal-footer ${elementTypes[1]}"></div>
        </div>
    `
    $('#modal-pokemon').modal('show')
}