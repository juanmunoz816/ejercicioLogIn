const userSection = document.querySelector("#section")

const usersTimeline=[
    {username:"Estefany",timeline:"Me encata Javascript!",},
    {username:"Oscar",timeline:"Bebeloper es lo mejor!",},
    {username:"Mariana",timeline:"A mi me gusta más el café que el té",},
    {username:"Andres",timeline:"Yo hoy no quiero trabajar",},

]

function renderTimeLine(timeline){
    for(person of timeline){

        

        const card = document.createElement('div')
        card.classList.add('user')

        const personName = document.createElement('h2')
        personName.innerHTML = person.username

        const personTimeLine = document.createElement('p')
        personTimeLine.innerHTML = person.timeline


        card.append(personName, personTimeLine)

        userSection.appendChild(card);
    }
}

renderTimeLine(usersTimeline)
