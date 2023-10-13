// task is to create a 16 x 16 grid within the container div

// the grid will need 256 div altogether so we will start with creating that 

// we will first grab the container div
const container = document.getElementById("container");

// we then create the 256 divs and add a class to divs to hover over them in the next step
for (i = 0; i < 256; i++){
    const divs = document.createElement("div")
    divs.classList.add("singleUnit")
    container.appendChild(divs)
}

//we then grab the 256 divs created in the html collection and store it as an array so we can apply array methods after

const units = document.getElementsByClassName('singleUnit')

const unitsArray = Array.from(units)

unitsArray.forEach(unit => {
    unit.addEventListener('mouseover', () => {
        unit.style.backgroundColor = 'black'
    })
})



