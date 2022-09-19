// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.

let game;


// hide game screen
welcomeScreen.classList.remove(`d-none`);
gameScreen.classList.add(`d-none`);



// updateScoreTallyUI
function updateScoreTallyUI() {
  const scoreText = `${game.username}: ${game.score.user} v CPU: ${game.score.cpu}`;
  scoreParagraph.innerHTML = scoreText;
}

// updateGameHistoryUI
function updateGameHistoryUI() {
  gameHistoryParagraph.innerHtml = '';
  const gameLog = game.gameHistoryLog.join('\n');
  gameHistoryParagraph.innerHtml = gameLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = userName.value;
  game = new RockPaperScissors(username);
  welcomeScreen.classList.add(`d-none`);
  gameScreen.classList.remove(`d-none`);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  const userSelected = userSelection.options[userSelection.selectedIndex].value;
  game.play(userSelected);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 

// });