/* eslint no-unused-vars: "warn" */

document.addEventListener('DOMContentLoaded', () => {
  let cardsArray = [
    {
      name: 'image1',
      img: './assets/images/1528109966604-5a6a4a964e8d.jpg',
    },
    {
      name: 'image2',
      img: './assets/images/1597239450996-ea7c2c564412.jpg',
    },
    {
      name: 'image3',
      img: './assets/images/1612696874005-d015469bc660.jpg',
    },
    {
      name: 'image4',
      img: './assets/images/1621569899323-55c203a0f7f1.jpg',
    },
    {
      name: 'image5',
      img: './assets/images/1623180253479-3eaed9dda118.jpg',
    },
    {
      name: 'image6',
      img: './assets/images/1624313976899-0fd4989a2fcd.jpg',
    },
  ];

  const grid = document.getElementById('grid');
  const score = document.getElementById('score');

  let cardsChosenName = [];
  let cardsChosenId = [];
  const cardsWon = [];

  cardsArray = cardsArray.reduce((arryReturn, element) => arryReturn.concat(element, element), []);
  cardsArray.sort(() => 0.5 - Math.random());

  function createBoard() {
    for (let index = 0; index < cardsArray.length; index++) {
      const card = document.createElement('img');

      card.setAttribute('src', './assets/images/blank-photo-1533122250115-6bb28e9a48c3.jpg');
      card.setAttribute('class', 'transform rounded-md');
      card.setAttribute('data-id', index);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function flipCard() {
    const id = this.getAttribute('data-id');

    cardsChosenName.push(cardsArray[id].name);
    cardsChosenId.push(id);

    this.setAttribute('src', cardsArray[id].img);

    if (cardsChosenName.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const selectedOneId = cardsChosenId[0];
    const selectedTwoId = cardsChosenId[1];

    if (cardsChosenName[0] === cardsChosenName[1]) {
      cards[selectedOneId].setAttribute('src', './assets/images/white.jpg');
      cards[selectedTwoId].setAttribute('src', './assets/images/white.jpg');
      cardsWon.push(cardsChosenName);
    } else {
      cards[selectedOneId].setAttribute('src', './assets/images/blank-photo-1533122250115-6bb28e9a48c3.jpg');
      cards[selectedTwoId].setAttribute('src', './assets/images/blank-photo-1533122250115-6bb28e9a48c3.jpg');
    }

    cardsChosenName = [];
    cardsChosenId = [];
    score.textContent = cardsWon.length;

    if (cardsWon.length === cardsArray.length / 2) {
      score.textConten = 'Parabéns';
    }
  }

  createBoard();
});
