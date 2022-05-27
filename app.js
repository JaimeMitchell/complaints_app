//function
function borough(borough, limit) {

    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&$limit=${limit}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
function num() {
    const textBox = document.querySelector("#textBox")
    let number = textBox.value || 10
    return number
}
// return display.textContent = Number(textBox.value)
// clears out the input value prop
// input.value = ''


//2. Create Functions for buttons(num, manhattan, brooklyn, bronx, queens, statenIsland) 
//update the value of the div variable using textContent
// const Manhattan = () => result.textContent

const manhattan = () => borough("MANHATTAN", num())

const brooklyn = () => borough("BROOKLYN", 10)

const bronx = () => borough("BRONX", num())

const queens = () => borough("QUEENS", num())

const statenIsland = () => borough("STATEN ISLAND", num())

//3. Attach Functions to Buttons, this is the connection between the buttons and the 'display' div
const ManhattanBtn = document.querySelector('#manhattan')
ManhattanBtn.addEventListener('click', manhattan)
// ManhattanBtn.addEventListener('click', function () {
//     console.log('test')
//     const textBox = document.querySelector("#textBox")
//     let number=textBox.value||10
//     borough("MANHATTAN", number)
// })

// 
const BrooklynBtn = document.querySelector('#brooklyn')
BrooklynBtn.addEventListener('click', brooklyn)

// const BronxBtn = document.querySelector("#bronx")
// BronxBtn.addEventListener('click', bronx)

// const QueensBtn = document.querySelector("#queens")
// QueensBtn.addEventListener('click', queens)

// const StatenIslandBtn = document.querySelector('#statenIsland')
// StatenIslandBtn.addEventListener('click', statenIsland)