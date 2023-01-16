const eleCardsContainer = document.querySelector('.cards-container');

const persona1 = {
    'name': 'Wayne Barnett',
    'role': 'Founder & CEO',
    'image': 'wayne-barnett-founder-ceo.jpg'
};

const persona2 = {
    'name': 'Angela Caroll',
    'role': 'Chief Editor',
    'image': 'angela-caroll-chief-editor.jpg'
};

const persona3 = {
    'name': 'Walter Gordon',
    'role': 'Office Manager',
    'image': 'walter-gordon-office-manager.jpg'
};

const persona4 = {
    'name': 'Angela Lopez',
    'role': 'Social Media Manager',
    'image': 'angela-lopez-social-media-manager.jpg'
};

const persona5 = {
    'name': 'Scott Estrada',
    'role': 'Developer',
    'image': 'scott-estrada-developer.jpg'
};

const persona6 = {
    'name': 'Barbara Ramos',
    'role': 'Graphic Designer',
    'image': 'barbara-ramos-graphic-designer.jpg'
};

const arrEmployers = [persona1, persona2, persona3, persona4, persona5, persona6];

// console.log(arrEmployers);

printCards();

function printCards() {
    for(let i = 0; i < arrEmployers.length; i++) {
        // Creare il div
        const newDiv = document.createElement('div');
        newDiv.classList.add('card');
        eleCardsContainer.append(newDiv);

        // Creazione img
        const newImg = document.createElement('img');
        newImg.src= `img/${arrEmployers[i].image}`;
        newDiv.append(newImg);

        // Creazione h4
        const newH4 = document.createElement('h4');
        newH4.innerHTML = arrEmployers[i].name;
        newDiv.append(newH4);

        // Creazione p
        const newP = document.createElement('p');
        newP.innerHTML = arrEmployers[i].role;
        newDiv.append(newP);
    }
}