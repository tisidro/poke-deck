//outer wrapper for pokemon cards
const mainWrapper = document.querySelector('.main-wrapper')

//function retrieves pokemon data from api
function getPokemon (id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => console.log(data))
}

getPokemon(1)
