let limit = 10
const borough = "STATEN ISLAND"
fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough='+borough + "&$limit=" +limit)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))