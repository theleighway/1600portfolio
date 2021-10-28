import { people } from "../data/people.js";
import {getLastNumber, removeChildren} from '../utils/index.js'

const main = document.querySelector("#main");

const mainHeader = document.createElement('header')
document.body.insertBefore(mainHeader, main)

//begining of all button
const allButton = document.createElement('button')
allButton.textContent = 'All Characters'
allButton.addEventListener('click', () => populateDOM(people))
mainHeader.appendChild(allButton)

//begining of male button
const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
maleButton.addEventListener('click', () => populateDOM(maleCharacters))
mainHeader.appendChild(maleButton)

// begining of female button
const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))
mainHeader.appendChild(femaleButton)

//begining of other button
const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
otherButton.addEventListener('click', () => populateDOM(otherCharacters))
mainHeader.appendChild(otherButton)



const maleCharacters = people.filter(person => person.gender === 'male')

const femaleCharacters = people.filter(person => person.gender === 'female')
console.log(femaleCharacters.length)

const otherCharacters = people.filter(person => {
  if(person.gender === 'n/a' || person.gender === 'hermaphrodite' || person.gender === 'none') {
    return person
  }
})


function populateDOM(characters) {
  //remove all the previous items before pupulating with new ones
  removeChildren(main)


characters.forEach((element) => {
  const personFig = document.createElement("figure");
  const personImg = document.createElement("img");
  let charNum = getLastNumber(element.url)
  personImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;
  const personCaption = document.createElement("figcaption");
  personCaption.textContent = element.name;

  personFig.appendChild(personImg);
  personFig.appendChild(personCaption);

  main.appendChild(personFig);
  
})
}


// I looked over the js code today to try an figure out more on what it does. Jv is still pretty hard for me.
