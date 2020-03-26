const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=52f82d80daa5fdbda89179d4e33ae167'
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=52f82d80daa5fdbda89179d4e33ae167'
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        document.getElementById('currently').textContent = jsonObject.weather[0].main;
        document.getElementById('high').textContent = jsonObject.main.temp_max;
        document.getElementById('humidity').textContent = jsonObject.main.humidity;
        document.getElementById('windspeed').textContent = jsonObject.wind.speed;
    })

fetch(forecastURL)
    .then(response => response.json())
    .then(jsonObject => {
        const forecasts = jsonObject.list.filter(item => item.dt_txt.includes('18:00:00'));
        const rows = document.querySelectorAll('tr td span');
        const icons = document.querySelectorAll('tr td img');
        const days = document.querySelectorAll('th');

        for (let i = 0; i < rows.length; i++) {
            const date = new Date(forecasts[i].dt_txt);
            const day = weekdays[date.getDay()];
            rows[i].textContent = Math.round(forecasts[i].main.temp);
            icons[i].setAttribute('src', `https://openweathermap.org/img/wn/${forecasts[i].weather[0].icon}@2x.png`);
            days[i].textContent = day;
        }
    });

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        console.table(jsonObject);
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Soda Springs") {
                let event = document.createElement('section');
                for (let x = 0; x < towns[i].events.length; x++) {
                    let p = document.createElement('p');
                    p.textContent = towns[i].events[x];
                    event.appendChild(p);
                }

                document.querySelector('div.events').appendChild(event);
            }
        }
    });
