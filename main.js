//outer wrapper for pokemon cards
const mainWrapper = document.querySelector('.main-wrapper')

//function retrieves pokemon data from api
function fetchPokemon (id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      generatePokemon(data)
    })
}

// console.log(getPokemon(1))

function fetchPokemons (number) {
  for (let i = 1; i <= number; i++) {
    fetchPokemon(i)
  }
}

// getMultiplePokemon(6)

function generatePokemon (pokemon) {
  const card = document.createElement('div')
  card.classList.add('pokemon-card')

  const spriteWrapper = document.createElement('div')
  spriteWrapper.classList.add('sprite-wrapper')

  const sprite = document.createElement('img')
  sprite.src = pokemon.sprites.front_default

  spriteWrapper.appendChild(sprite)

  const number = document.createElement('p')
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`

  const name = document.createElement('p')
  name.classList.add('name')
  name.textContent = pokemon.name

  card.appendChild(name)
  card.appendChild(spriteWrapper)
  card.appendChild(number)

  mainWrapper.appendChild(card)
}
fetchPokemons(12)
