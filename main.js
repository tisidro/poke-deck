//outer wrapper for pokemon cards
const mainWrapper = document.querySelector('.main-wrapper')
//while card loads
const cardLoading = document.querySelector('#card-loading')

//function retrieves pokemon data from api
function fetchPokemon (id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      generatePokemon(data)
      cardLoading.style.display = 'none' //once fetch is called don't display "loading"
    })
}

// console.log(getPokemon(1))

//fetches number of pokemon specified
function fetchPokemons (number) {
  cardLoading.style.display = 'block'
  for (let i = 1; i <= number; i++) {
    fetchPokemon(i)
  }
}
// fetchPokemons(6)

//creates the pokemon card  by generating child items (elements and classes)
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

  //append child items created above to card for display
  card.appendChild(name)
  card.appendChild(spriteWrapper)
  card.appendChild(number)

  mainWrapper.appendChild(card)
}
//call fetch for 12 pokemon
fetchPokemons(12)
