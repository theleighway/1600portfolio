import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const members = [...senators, ...representatives] // modern combining arrays like a genus

const senatorDiv = document.querySelector('.senators')

function simplifiedMembers(chamberFilter) {
  const filteredArray = members.filter(member => chamberFilter ? member.short_title === chamberFilter : member)
  const seniorityDiv = document.querySelector

  return filteredArray.map((senator) => {
    const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
    return {
      id: senator.id,
      name:`${senator.first_name}${middleName}${senator.last_name}`,
      party: senator.party,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
      gender: senator.gender,
      seniority: +senator.seniority,
      missedVotesPct: senator.missed_votes_pct,
      loyaltyPct: senator.votes_with_party_pct,
    }
  })
}

populateSenatorDiv(simplifiedMembers('Sen.'))

function populateSenatorDiv(simpleSenators) {
  simpleSenators.forEach(senator => {
    let senFigure = document.createElement('figure')
    let figImg = document.createElement('img')
    let figCaption = document.createElement('figcaption')

    figImg.src = senator.imgURL

    figCaption.textContent = senator.name
    senFigure.appendChild(figImg)
    senFigure.appendChild(figCaption)
    senatorDiv.appendChild(senFigure)
  })
}


const filterSenators = (prop, value) => {
  return simplifiedMembers(senators).filter(senator => senator[prop] === value)
}

const republicans = filterSenators('party', 'R')
const femaleSenators = filterSenators('gender', 'F')

const mostSeniorMember = simplifiedMembers().reduce((acc, senator) => {
  return acc.seniority > senator.seniority ? acc : senator
})

console.log()

const mostLoyal = simplifiedMembers().reduce((acc, senator) => {
  if(senator.loyaltyPct === 100) {
    acc.push(senator) 
  }
  return acc
}, [])

console.log(mostLoyal)

const biggestWeasel = simplifiedMembers().reduce((acc, senator) => (acc.missedVotesPct || 0) > senator.missedVotesPct ? acc : senator, {})

const biggestWeasels = simplifiedMembers().filter(senator => senator.missedVotesPct === biggestWeasel.missedVotesPct)

console.log(biggestWeasel, biggestWeasels)

