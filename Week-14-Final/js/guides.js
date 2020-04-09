const file = 'guides.json' /* I'm unsure of how to load a local .JSON file */
fetch(file)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const guides = jsonObject['guides'];
        for (let i = 0; i < guides.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let photo = document.createElement('img');
            let level = document.createElement('div');
            let experience = document.createElement('div');
            let email = document.createElement('div');
            let biography = document.createElement('div');
            let name = guides[i].name;
            let alttext = name + ' - ' + (i + 1);

            h2.textContent = name;
            photo.setAttribute('src', "/Week-14-Final/images/" + guides[i].photo);
            photo.setAttribute('alt', alttext);
            photo.setAttribute('title', alttext);

            level.textContent = guides[i].level;
            experience.textContent = guides[i].experience;
            email.textContent = guides[i].email;
            biography.textContent = guides[i].biography;


            card.appendChild(name);
            card.appendChild(photo);
            card.appendChild(level);
            card.appendChild(experience);
            card.appendChild(email);
            card.appendChild(biography);

            document.querySelector('div.cards').appendChild(card);
        }
    }); 