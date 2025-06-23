//Elements
const rollCard = document.querySelector(`.button-roll`);
const current0 = document.querySelector(`#current-score0`);
const current1 = document.querySelector(`#current-score1`);
const player1 = document.querySelector(`.player0`);
const player2 = document.querySelector(`.player1`);
const holdCard = document.querySelector(`.button-hold`);
const newGame = document.querySelector(`.button-new`);
const score0 = document.querySelector(`#score-0`);
const score1 = document.querySelector(`#score-1`);
const card1 = document.querySelector(`.card1`);
const card2 = document.querySelector(`.card2`);
const card3 = document.querySelector(`.card3`);

//Starting Condition
let currentScore = 0;
let playerActive = 0;
let previousCard = [];
let playersHighScore = [0, 0];

//Toogle Function
const toogle = function () {
  player1.classList.toggle(`player-active`);
  player2.classList.toggle(`player-active`);
};

//Roll Card
rollCard.addEventListener(`click`, function () {
  const randomCard = Math.trunc(Math.random() * 7) + 1;
  console.log(randomCard);
  previousCard.unshift(randomCard);
  let previousCard2 = previousCard[1] ? previousCard[1] : `back`;
  let previousCard3 = previousCard[2] ? previousCard[2] : `back`;
  card1.src = `assets/${previousCard[0]}.svg`;
  card2.src = `assets/${previousCard2}.svg`;
  card3.src = `assets/${previousCard3}.svg`;
  // document.querySelector(`#score-0`).textContent = 0;
  // document.querySelector(`#score-1`).textContent = 0;
  if (randomCard !== 7) {
    currentScore += randomCard;
    document.querySelector(`#current-score${playerActive}`).textContent =
      currentScore;
  } else {
    card2.src = `assets/back.svg`;
    card3.src = `assets/back.svg`;
    previousCard = [];
    currentScore = 0;
    document.querySelector(`#current-score${playerActive}`).textContent = 0;
    playerActive = playerActive === 0 ? 1 : 0;
    toogle();
  }
  console.log(previousCard);
  if (previousCard.length > 2) {
    previousCard.pop();
  }
});

//Hold Card
holdCard.addEventListener(`click`, function () {
  playersHighScore[playerActive] =
    currentScore > playersHighScore[playerActive]
      ? currentScore
      : playersHighScore[playerActive];

  //option play
  // playersHighScore[playerActive] += currentScore;

  console.log(playersHighScore);
  document.querySelector(`#score-${playerActive}`).textContent =
    playersHighScore[playerActive];
  document.querySelector(`#current-score${playerActive}`).textContent = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  toogle();
  card1.src = `assets/back.svg`;
  card2.src = `assets/back.svg`;
  card3.src = `assets/back.svg`;
  previousCard = [];
  currentScore = 0;
});

//New game
newGame.addEventListener(`click`, function () {
  currentScore = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  previousCard = [];
  playersHighScore = [0, 0];
  playerActive = 0;
  document
    .querySelector(`.player${playerActive}`)
    .classList.add(`player-active`);
  document
    .querySelector(`.player${playerActive + 1}`)
    .classList.remove(`player-active`);
});
