const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
const selection = ["Fish Haven", "Preston", "Soda Springs"];
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (selection.includes(towns[i].name)) {

                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h4 = document.createElement('h4');
                let photo = document.createElement('img');
                let founded = document.createElement('div');
                let population = document.createElement('div');
                let rainfall = document.createElement('div');
                let infodiv = document.createElement('div');
                let content = document.createElement('div');
                let townname = towns[i].name;
                let townmotto = towns[i].motto;
                let alttext = townname + ' - ' + (i + 1);

                h2.textContent = townname;
                h4.textContent = townmotto;
                founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                population.textContent = 'Population: ' + towns[i].currentPopulation;
                rainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;

                photo.setAttribute('src', "/Lesson-11/images/" + towns[i].photo);
                photo.setAttribute('alt', alttext);
                photo.setAttribute('title', alttext);
                content.setAttribute('class', 'content');

                card.appendChild(h2);
                card.appendChild(h4);
                card.appendChild(content);

                content.appendChild(infodiv);
                content.appendChild(photo);

                infodiv.appendChild(founded);
                infodiv.appendChild(population);
                infodiv.appendChild(rainfall);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    });