import { people } from "../data/people.js";

const main = document.querySelector("#main");

console.log(people.length);

people.forEach((element) => {
  const personFig = document.createElement("figure");
  const personImg = document.createElement("img");
  personImg.src = `https://starwars-visualguide.com/assets/img/characters/${
    index + 1
  }.jpg`;
  const personCaption = document.createElement("figcaption");
  personCaption.textContent = element.name;

  personFig.appendChild(personImg);
  personFig.appendChild(personCaption);

  main.appendChild(personFig);
});
