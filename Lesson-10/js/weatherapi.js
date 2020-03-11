const apiURL = 'api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=52f82d80daa5fdbda89179d4e33ae167'
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });