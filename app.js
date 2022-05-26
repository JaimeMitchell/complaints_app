fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
    .then(response => response(json()))
    .then(data => console.log(data))
    .catch(error => console.log(error))

 $.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "YOURAPPTOKENHERE"
    }
}).then(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});