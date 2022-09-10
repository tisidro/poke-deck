//outer wrapper for pokemon cards
const mainWrapper = document.querySelector('.main-wrapper')

//function retrieves pokemon data from api
function getPokemon (id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => console.log(data))
}

// console.log(getPokemon(1))

function getMultiplePokemon (items) {
  for (let i = 1; i <= items; i++) {
    getPokemon(i)
  }
}

// getMultiplePokemon(6)

function generatePokemon (pokemon) {}
