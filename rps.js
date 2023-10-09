function getComputerChoice() {
  const getNumber = Math.floor((Math.random() * 100) + 1);
  
  if (getNumber <= 33) {
    return 'Rock'
  } else if (getNumber > 33 && getNumber <= 66) {
    return 'Paper'
  } else if (getNumber > 66) {
    return 'Scissors'
  }
}

function playRound() {
  let pmove = prompt('ur move?', '').toLowerCase();
  let cmove = getComputerChoice().toLowerCase();
  let result;

  if (pmove === 'rock') {
    if (cmove === 'rock') {
      result = 'No one wins, its a draw';
    } else if (cmove === 'scissors') {
      result = 'u win';
    } else if (cmove === 'paper') {
      result = 'you lose';
    }
    return result;
  }

  if (pmove === 'scissors') {
    if (cmove === 'rock') {
      result = 'you lose';
    } else if (cmove === 'scissors') {
      result = 'No one wins, its a draw';
    } else if (cmove === 'paper') {
      result = 'u win';
    }
    return result;
  }

  if (pmove === 'paper') {
    if (cmove === 'rock') {
      result = 'u win';
    } else if (cmove === 'scissors') {
      result = 'you lose'
    } else if (cmove === 'paper') {
      result = 'No one wins, its a draw';
    }
    return result;
  }
  
}

function FiveRoundgame() {
  let myScore = 0;
  let cpScore = 0;
  let draws = 0;

for (let i = 0; i < 5; i++) {
  let smth = playRound();
  if (smth === 'u win') {
    myScore++;
  } else if (smth === 'you lose') {
    cpScore++;
  } else {
    draws++;
  }
};

console.log('me :' + myScore, ', cp :' + cpScore,', draw :' +  draws);

if (myScore > cpScore) {
  return 'DARA WINS THE GAME!';
} else if (cpScore > myScore) {
  return 'COMPUBRO WINS THE GAME!'
} else if (cpScore === myScore) {
  return 'ITS A DRAW'
};

//THIS IS FOR FIRST TO 5 WINS 
      // while (myScore < 5 || cpScore < 5) {
      //   let smth = playRound();
      //   if (smth === 'u win') {
      //     myScore++;
      //   } else if (smth === 'you lose') {
      //     cpScore++;
      //   }
      // }

      // if (myScore === 5) {
      //   return 'DARA WINS THE GAME!';
      // } else if (cpScore === 5) {
      //   return 'COMPUBRO WINS THE GAME!'
      // } else if (cpScore === myScore) {
      //   return 'ITS A DRAW'
      // }

}

console.log(FiveRoundgame());
