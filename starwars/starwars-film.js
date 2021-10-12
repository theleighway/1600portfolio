import { films } from '../data/films.js'


let filmlist = document.querySelector('#filmlist')

let titleList = document.createElement('ol')

filmlist.appendChild(titleList)

let poster = document.createElement('img')

filmlist.appendChild('img')

poster.src = "https://starwars-visualguide.com/assets/img/films/1.jpg"

for (let i = 0; i < films.length; i++) {
    let titleItem = document.createElement('li')
    titleItem.textContent = films[i].title
    titleList.appendChild(titleItem)
}