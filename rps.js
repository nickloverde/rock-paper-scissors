const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};

// Play Game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice =  getComputerChoice();
  const winner = getWinner (playerChoice, computerChoice);
  showWinner(winner, computerChoice);

}

//Get computer choice
function getComputerChoice() {
  const random = Math.random();
  if(random < 0.34) {
    return 'rock';
  } else if (random <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Get Game Winner
function getWinner (playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';  
  } else if ( playerChoice === 'rock') {
    if (computerChoice === 'paper') {
       return 'computer';
    } else {
      return 'player';
    }
  } else if(playerChoice === 'paper') {
    if(computerChoice === 'rock') {
      return 'player';
    } else {
      return 'computer';
    }
  } else if(playerChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

// Show Winner
function showWinner(winner, computerChoice) {
  if(winner === 'player') {
    scoreboard.player++;
    result.innerHTML = `
    <h1 class="text-win">You Win</h1>
    <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  } else if(winner === 'computer') {
    scoreboard.computer++;
    result.innerHTML = `
    <h1 class="text-lose">You Lose</h1>
    <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  } else {
    result.innerHTML = `
    <h1>It's a Draw</h1>
    <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  }

  //Show Score
  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  `;

modal.style.display = 'block';
}

//Restart Game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
  <p>Player: 0</p>
  <p>Computer: 0</p>
  `;
}

// Clear Modal Function
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);