//Elements
const rollCard = document.querySelector(`.button-roll`);
const current0 = document.querySelector(`#current-score0`);
const current1 = document.querySelector(`#current-score1`);
const player1 = document.querySelector(`.player0`);
const player2 = document.querySelector(`.player1`);
const holdCard = document.querySelector(`.button-hold`);
const endGame = document.querySelector(`.button-end`);
const newGame = document.querySelector(`.button-new-game`);
const score0 = document.querySelector(`#score-0`);
const score1 = document.querySelector(`#score-1`);
const card1 = document.querySelector(`.card1`);
const card2 = document.querySelector(`.card2`);
const card3 = document.querySelector(`.card3`);
const winner = document.querySelector(`.winner`);
const winnerPlayer = document.querySelector(`.winner-player`);
const winnerScore = document.querySelector(`.winner-score`);

//Starting Condition
let currentScore = 0;
let playerActive = 0;
let previousCard = [];
let playersHighScore = [0, 0];
let playersScore = [0, 0];
let playing = true;

//Toogle Function
const toogle = function () {
  previousCard = [];
  currentScore = 0;
  document.querySelector(`#current-score${playerActive}`).textContent = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  player1.classList.toggle(`player-active`);
  player2.classList.toggle(`player-active`);
};

//Roll Card
rollCard.addEventListener(`click`, function () {
  const randomCard = Math.trunc(Math.random() * 7) + 1;
  console.log(`this is random card`, randomCard);
  previousCard.unshift(randomCard);
  console.log(`this is list card`, previousCard);
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
    toogle();
  }
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

  playersScore[playerActive] += currentScore;
  console.log(`this is playerscore`, playersScore);
  console.log(`tahis is playershighscore`, playersHighScore);
  document.querySelector(`#score-${playerActive}`).textContent =
    playersHighScore[playerActive];

  toogle();
  card1.src = `assets/back.svg`;
  card2.src = `assets/back.svg`;
  card3.src = `assets/back.svg`;
});

//End game
endGame.addEventListener(`click`, function () {
  let winnerplayer = playersScore[0] > playersScore[1] ? 1 : 2;
  card1.style.zIndex = "1";
  setTimeout(function () {
    card3.src = `assets/card-${3}.svg`;
    card3.classList.toggle(`card3-end-game`);
  }, 2000);
  setTimeout(function () {
    card2.src = `assets/card-${2}.svg`;
    card2.classList.toggle(`card2-end-game`);
  }, 4000);
  setTimeout(function () {
    card1.src = `assets/card-count1.svg`;
    card1.classList.toggle(`card1-end-game`);
    card1.style.zIndex = "20";
  }, 6000);
  setTimeout(function () {
    card1.src = `assets/card-count2.svg`;
    card1.classList.toggle(`card1position`);
  }, 7000);
  setTimeout(function () {
    card1.src = `assets/card-count3.svg`;
  }, 7500);
  setTimeout(function () {
    card1.src = `assets/card-${1}.svg`;
    setTimeout(function () {
      winner.classList.add(`show`);
      winnerPlayer.textContent = `player${winnerplayer}`;
      winnerScore.textContent = playersScore[winnerplayer - 1];
    }, 500);
  }, 8000);
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
  winner.classList.remove(`show`);
  card1.src = `assets/back.svg`;
  card2.src = `assets/back.svg`;
  card3.src = `assets/back.svg`;
  card2.classList.toggle(`card2-end-game`);
  card3.classList.toggle(`card3-end-game`);
  card1.classList.toggle(`card1-end-game`);
});
