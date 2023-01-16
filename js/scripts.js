const eleCardsContainer = document.querySelector('.cards-container');

const arrEmployers = [
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'
    }, {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'
    }, {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    }, {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'
    }, {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    }, {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    }
];

printCards();

function printCards() {
    for(let i = 0; i < arrEmployers.length; i++) {
        // Creazione div
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

        console.log(arrEmployers[i].name);
    }
}