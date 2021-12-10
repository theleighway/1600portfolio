import { removeChildren } from '../utils/index.js'

function getAPIData(url) {
  try {
    return fetch(url).then((data) => data.json())
  } catch (error) {
    console.error(error)
  }
}

function loadPokemon(offset = 0, limit = 25) {
  getAPIData(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then(async (data) => {
    for (const pokemon of data.results) {
      await getAPIData(pokemon.url).then((pokeData) =>
        populatePokeCard(pokeData),
        
      )
    }
  })
}

const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')
loadButton.addEventListener('click', () => {
  removeChildren(pokeGrid)
  loadPokemon(100, 50)
})

const allPokemon = await getPokemonType()

async function getPokemonType() {
  const allPokemon = []
  await getAPIData(
    `https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`,
  ).then(async (data) => {
    for (const pokemon of data.results) {
      await getAPIData(pokemon.url).then((pokeData) => {
        const sortedPokemon = {
          abilities: pokeData.abilities,
          height: pokeData.height,
          id: pokeData.id,
          name: pokeData.name,
          types: pokeData.types,
          weight: pokeData.weight,
        }
        allPokemon.push(sortedPokemon)
        
        //filterSinglePokemonType(pokedata,"fire")
      //console.log(filter(data.results,test))
      })
    }
  })
  return allPokemon
}

function sortAllPokemonType(type) {
  return allPokemon.filter((pokemon) => pokemon.types[0].type.name == type)
}
// function filterSinglePokemonType(data,filter){
//   //types [{type:{name:"normal"}}]

//   if (data["types"][0]["type"]["name"] == filter){
//     //populatePokeCard(data)
//     console.log("true")
//   } 
// }
// //console.log(loadFirePokemon(0,10))
// loadFirePokemon(0,20)
// //loadPokemon(200, 25)



const fireButton = document.querySelector('.fireButton')
fireButton.addEventListener('click', () => {
  removeChildren(pokeGrid)
const pokemonByType = sortAllPokemonType('fire')
pokemonByType.forEach((item) => populatePokeCard(item))
})

const waterButton = document.querySelector('.waterButton')
waterButton.addEventListener('click', () => {
  removeChildren(pokeGrid)
const pokemonByWater = sortAllPokemonType('water')
pokemonByWater.forEach((item) => populatePokeCard(item))
})

const rockButton = document.querySelector('.rockButton')
rockButton.addEventListener('click', () => {
  removeChildren(pokeGrid)
  const pokemonByRock = sortAllPokemonType('rock')
  pokemonByRock.forEach((item) => populatePokeCard(item))
})

const grassButton = document.querySelector('.grassButton')
grassButton.addEventListener('click', () => {
  removeChildren(pokeGrid)
  const pokemonByGrass = sortAllPokemonType('grass')
  pokemonByGrass.forEach((item) => populatePokeCard(item))
})

const flyingButton = document.querySelector('.flyingButton')
flyingButton.addEventListener('click', () => {
  removeChildren(pokeGrid)
  const pokemonByFlying = sortAllPokemonType('flying')
  pokemonByFlying.forEach((item) => populatePokeCard(item))
})

const dragonButton = document.querySelector('.dragonButton')
dragonButton.addEventListener('click', () => {
  removeChildren(pokeGrid)
  const pokemonByDragon = sortAllPokemonType('dragon')
  pokemonByDragon.forEach((item) => populatePokeCard(item))
})

const electricButton = document.querySelector('.electricButton')
electricButton.addEventListener('click', () => {
  removeChildren(pokeGrid)
  const pokemonByElectric = sortAllPokemonType('electric')
  pokemonByElectric.forEach((item) => populatePokeCard(item))
})

const iceButton = document.querySelector('.iceButton')
iceButton.addEventListener('click', () => {
  removeChildren(pokeGrid)
  const pokemonByIce = sortAllPokemonType('ice')
  pokemonByIce.forEach((item) => populatePokeCard(item))
})


/* First, get a reference to the pokemon choice button
Second, add an event listener on click
Third, use getAPIData with a URL like this https://pokeapi.co/api/v2/${promptedNameOrId}
Fourth, populatePokeCard with the pokemon data retrieved */

const moreButton = document.querySelector('.morePokemon')
moreButton.addEventListener('click', () => {
  let limit = prompt('How many more Pokemon should I load?')
  let offset = prompt('At which Pokemon ID should I start loading?')
  loadPokemon(offset, limit)
})

const newButton = document.querySelector('.newPokemon')
newButton.addEventListener('click', () => {
  let pokeName = prompt('What is the name of your new Pokemon?')
  let pokeHeight = prompt("What is the Pokemon's height?")
  let pokeWeight = prompt("What is the Pokemon's weight?")
  let pokeAbilities = prompt(
    'What are your Pokemon abilities? (use a comma separated list)',
  )
  let pokeTypes = prompt("What are your Pokemon's types? (up to 2 types separated by a space)")
  let newPokemon = new Pokemon(
    pokeName,
    pokeHeight,
    pokeWeight,
    getAbilitiesArray(pokeAbilities),
    getTypesArray(pokeTypes)
  )
  populatePokeCard(newPokemon)
})

function getAbilitiesArray(commaString) {
  let tempArray = commaString.split(',')
  return tempArray.map((abilityName) => {
    return {
      ability: {
        name: abilityName,
      },
    }
  })
}

function getTypesArray(spacedString) {
  let tempArray = spacedString.split(' ')
  return tempArray.map((typeName) => {
    return {
      type: {
        name: typeName
      }
    }
  })
}

class Pokemon {
  constructor(name, height, weight, abilities, types) {
    this.id = 100,
      this.name = name,
      this.height = height,
      this.weight = weight,
      this.abilities = abilities,
      this.types = types
  }
}

function populatePokeCard(singlePokemon) {
  const pokeScene = document.createElement('div')
  pokeScene.className = 'scene'
  const pokeCard = document.createElement('div')
  pokeCard.className = 'card'
  pokeCard.addEventListener('click', () =>
    pokeCard.classList.toggle('is-flipped'),
  )

  const front = populateCardFront(singlePokemon)
  const back = populateCardBack(singlePokemon)

  pokeCard.appendChild(front)
  pokeCard.appendChild(back)
  pokeScene.appendChild(pokeCard)
  pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
  const pokeFront = document.createElement('figure')
  pokeFront.className = 'cardFace front'
  const pokeImg = document.createElement('img')
  pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

  const pokeCaption = document.createElement('figcaption')

  //pokeCaption.textContent = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`
  pokeCaption.textContent = pokemon.name
  pokeFront.appendChild(pokeImg)
  pokeFront.appendChild(pokeCaption)

  typesBackground(pokemon, pokeFront)
  return pokeFront
}

function typesBackground(pokemon, card) {
  let pokeType1 = pokemon.types[0].type.name
  let pokeType2 = pokemon.types[1]?.type.name
  console.log(pokeType1, pokeType2)
  if(!pokeType2) {
    card.style.setProperty('background', getPokeTypeColor(pokeType1))
  } else {
    card.style.setProperty(
      'background',
      `linear-gradient(${getPokeTypeColor(pokeType1)}, ${getPokeTypeColor(pokeType2)})`,
    )
  }
}

function getPokeTypeColor(pokeType) {
  let color
  switch (pokeType) {
    case 'grass':
      color = '#00FF00'
      break
    case 'fire':
      color = '#FF0000'
      break
    case 'water':
      color = '#0000FF'
      break
    case 'bug':
      color = '#7FFF00'
      break
    case 'normal':
      color = '#F5F5DC'
      break
    case 'flying':
      color = '#00FFFF'
      break
    case 'poison':
      color = '#C300FF'
      break
    case 'electric':
      color = '#C8FF00'
      break
      case 'psychic':
        color = 'pink'
        break
        case 'ground':
        color = 'brown'
        break
    default:
      color = '#888888'
  }
  return color
}

function populateCardBack(pokemon) {
  const pokeBack = document.createElement('div')
  pokeBack.className = 'cardFace back'
  const label = document.createElement('h4')
  label.textContent = 'Abilities:'
  pokeBack.appendChild(label)
  const abilityList = document.createElement('ul')
  pokemon.abilities.forEach((abilityItem) => {
    let listItem = document.createElement('li')
    listItem.textContent = abilityItem.ability.name
    abilityList.appendChild(listItem)
  })
  pokeBack.appendChild(abilityList)
 
  const typeLabel = document.createElement('h4')
  typeLabel.textContent = 'Type:'
  pokeBack.appendChild(typeLabel)
  const typeslist = document.createElement('ol')
  pokemon.types.forEach((pokeType) => {
    let typeItem = document.createElement('li')
    typeItem.textContent = pokeType.type.name
    typeslist.appendChild(typeItem)
  })
  
  pokeBack.appendChild(typeslist)
  return pokeBack
}