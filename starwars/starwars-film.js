import { films } from '../data/films.js'


let filmlist = document.querySelector('#filmlist')

let titleList = document.createElement('ol')

filmlist.appendChild(titleList)

for (let i = 0; i < films.length; i++) {
    let titleItem = document.createElement('li')
    titleItem.textContent = films[i].title
    titleList.appendChild(titleItem)
}