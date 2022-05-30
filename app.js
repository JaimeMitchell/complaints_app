//1. function fetches the data and has 2 parameters, the borough and the limit, the limit variable will be a callback function, num, which takes the user text input as a number of complaints they want to see. This is attached the the button functions below that represent the 5 boroughs of NYC. This function also contains the expressions that print the number of complaints for the borough

function borough(districtName, limit) {

    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${districtName}&$limit=${limit}&$order=complaint_type`)
        .then(response => response.json())
        .then(data => {
            data.map((complaint, index) => {
                let div = document.createElement('div')
                let innerDiv = document.createElement('div')
                let p1 = document.createElement('p')
                let p2 = document.createElement('p')
                let btn = document.createElement('button')
                p1.textContent = complaint.complaint_type
                innerDiv.appendChild(p1)
                innerDiv.appendChild(btn)
                div.appendChild(innerDiv)
                div.appendChild(p2)
                const display = document.getElementById('display')
                display.appendChild(div)
                p2.style.visibility = 'hidden'
                btn.textContent = "Police Response?"
                btn.classList.add('button')
                innerDiv.classList.add('inner-div')
                // div.classList.add('wrapper')
                // Nested button that shows more details by changing the p2 text from hidden to visible.
                btn.addEventListener('click', function () {
                    p2.style.visibility = 'visible'
                    p2.textContent = complaint.resolution_description
                })
                console.log(data.sort())
            })
        })
        .catch(error => console.log(error))
}

//2. Create function to store user input number which is then called as a variable for borough function above. This is hoisting so may be better practice to put it above the higher order 'borough' function that calls it.

function getNumByInput() {
    const textBox = document.querySelector("#textBox")
    let inputValue = textBox.value || 10
    console.log('bla bla ',inputValue)
    return inputValue
}

//3. Create Functions for buttons(num, manhattan, brooklyn, bronx, queens, statenIsland) 

const manhattan = () => borough("MANHATTAN", getNumByInput())

const brooklyn = () => borough("BROOKLYN", getNumByInput())

const bronx = () => borough("BRONX", getNumByInput())

const queens = () => borough("QUEENS", getNumByInput())

const statenIsland = () => borough("STATEN ISLAND", getNumByInput())

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

//5. MAP
document.getElementById('map')
var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([37.41, 8.82]),
      zoom: 4
    })
    
  })
// Things to try for bonus:
// make_point
// $order=:id