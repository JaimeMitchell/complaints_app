fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
    .then(response => response(json()))
    .then(data => console.log(data))
    .catch(error => console.log(error))

    console.log('new update');
    console.log('another update');