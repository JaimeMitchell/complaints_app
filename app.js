let limit = 10
const borough = "BROOKLYN"

    //function
function boroughBtn(limit, borough) {
    fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough='+borough + "&$limit=" +limit)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
return limit, borough
}
    //1. Create a new variable called 'display' and assign it the div with the id of 'display'
    const display = document.querySelector('#display')
    let result = display.textContent

    //2. Create Six Functions (manhattan, brooklyn, bronx, queens, statenIsland) 
    //update the value of the total variable using textContent
    // const Manhattan = () => result.textContent
   
    const Manhattan = () => boroughBtn("MANHATTAN",limit)

    const Brooklyn = () =>  boroughBtn("BROOKLYN",limit)

    const Bronx = () => boroughBtn("BRONX",limit)

    const Queens = () => boroughBtn("QUEENS",limit) 

    const StatenIsland = () => boroughBtn("STATEN ISLAND",limit)

    //3. Attach Functions to Buttons, this is the connection between the buttons and the 'display' div
    const ManhattanBtn = document.querySelector('#manhattan')
    ManhattanBtn.addEventListener('click', Manhattan)

    const BrooklynBtn = document.querySelector('#brooklyn')
   BrooklynBtn.addEventListener('click', Brooklyn)

    const BronxBtn = document.querySelector("#bronx")
   BronxBtn.addEventListener('click', Bronx)

    const QueensBtn = document.querySelector("#queens")
    QueensBtn.addEventListener('click', Queens)

    const StatenIslandBtn = document.querySelector('#statenIsland')
    StatenIslandBtn.addEventListener('click', StatenIsland)