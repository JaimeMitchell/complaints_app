//1. function fetches the data and has 2 parameters, the borough and the limit, the limit variable will be a callback function, num, which takes the user text input as a number of complaints they want to see. This is attached the the button functions below that represent the 5 boroughs of NYC. This function also contains the expressions that print the number of complaints for the borough

function borough(borough, limit) {

    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough}&$limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            data.map((complaint, index) => {
                let div = document.createElement('div')
                let p1 = document.createElement('p')
                let p2 = document.createElement('p')
                let btn = document.createElement('button')
                p1.textContent = complaint.complaint_type
                div.appendChild(p1)
                div.appendChild(btn)
                div.appendChild(p2)
                const display = document.getElementById('display')
                display.appendChild(div)
                p2.style.visibility = 'hidden'
                btn.textContent = "Pigs response?"
                btn.addEventListener('click', function () {
                    p2.style.visibility = 'visible'
                    p2.textContent = complaint.resolution_description
                })
                console.log(data)
            })
        })
        .catch(error => console.log(error))
}

//2. Create function to store user input number which is then called as a variable for borough function above. This is hoisting so may be better practice to put it above the higher order 'borough' function that calls it.

function num() {
    const textBox = document.querySelector("#textBox")
    let number = textBox.value || 10
    return number
}

//3. Create Functions for buttons(num, manhattan, brooklyn, bronx, queens, statenIsland) 

const manhattan = () => borough("MANHATTAN", num())

const brooklyn = () => borough("BROOKLYN", num())

const bronx = () => borough("BRONX", num())

const queens = () => borough("QUEENS", num())

const statenIsland = () => borough("STATEN ISLAND", num())

//4. Attach Functions to Buttons, this is the connection between the buttons and the 'display' div

const ManhattanBtn = document.querySelector('#manhattan')
ManhattanBtn.addEventListener('click', manhattan)

const BrooklynBtn = document.querySelector('#brooklyn')
BrooklynBtn.addEventListener('click', brooklyn)

const BronxBtn = document.querySelector("#bronx")
BronxBtn.addEventListener('click', bronx)

const QueensBtn = document.querySelector("#queens")
QueensBtn.addEventListener('click', queens)

const StatenIslandBtn = document.querySelector('#statenIsland')
StatenIslandBtn.addEventListener('click', statenIsland)