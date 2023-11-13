// variables
let middleplayerVS = document.querySelector('.middle-playerVS');
let renderPlayerMove = document.querySelector('.renderPlayerMove');
let renderCPMove = document.querySelector('.renderCPMove');
let battleToScore = document.querySelector('.battleToScore');

let pHPnodeList = document.querySelector(".playerHP").children;
let cHPnodeList = document.querySelector(".opponentHP").children;

let playerHpBoxes = Array.from(pHPnodeList);
let opponentHpBoxes = Array.from(cHPnodeList);
let playerHP = playerHpBoxes.length,opponentHP = -1;

let moves = document.querySelectorAll('.move');
let renderResult = document.querySelector('.results');
let scoreBoard = document.querySelector('.scoreBoard');
let playerScore = {
  wins: 0,
  losses: 0,
  ties: 0
}

// core functions
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

function playRound(btnId) {
  let pmove= btnId.toLowerCase();
  let cmove = getComputerChoice().toLowerCase();
  let result;

  if (pmove === 'rock') {
    renderPlayerMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/rock.png">';

    if (cmove === 'rock') {
      renderCPMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/rock.png">'
      result = 'No one wins, its a draw';
    } else if (cmove === 'scissors') {
      renderCPMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/scissor.png">';
      result = 'u win';
    } else if (cmove === 'paper') {
      renderCPMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/paper.png">';
      result = 'you lose';
    }

    return result;
  }

  if (pmove === 'scissors') {
    renderPlayerMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/scissor.png">'
    if (cmove === 'rock') {
      renderCPMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/rock.png">'
      result = 'you lose';
    } else if (cmove === 'scissors') {
      renderCPMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/scissor.png">';
      result = 'No one wins, its a draw';
    } else if (cmove === 'paper') {
      renderCPMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/paper.png">';
      result = 'u win';
    }
    return result;
  }

  if (pmove === 'paper') {
    renderPlayerMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/paper.png">'
    if (cmove === 'rock') {
      renderCPMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/rock.png">'
      result = 'u win';
    } else if (cmove === 'scissors') {
      renderCPMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/scissor.png">';
      result = 'you lose'
    } else if (cmove === 'paper') {
      renderCPMove.innerHTML = '<img class="moveIMGVS" src="imagesGifs/paper.png">';
      result = 'No one wins, its a draw';
    }
    return result;
  }
  
}



//later functions


function removeGreen() {
  playerHpBoxes[playerHP].classList.remove('green');
}
function removeCpGreen() {
  opponentHpBoxes[opponentHP].classList.remove('green');
}


function GAME(btn) {
  let Id = btn.id;
  let result = playRound(Id);
  battleToScore.innerText = `${result}`
  // renderResult.innerHTML = result;
  if (result === 'u win') {
    playerScore.wins++;
    opponentHP++;
    console.log(opponentHP)
    removeCpGreen();
  } else if (result === 'you lose') {
    playerScore.losses++;
    playerHP--;
    console.log(playerHP)
    removeGreen();
  } else {
    playerScore.ties++;
  }
  scoreBoard.innerHTML = `wins : ${playerScore.wins},<br>
  losses: ${playerScore.losses},<br>
  ties: ${playerScore.ties}`;

  if (playerScore.wins === 5) {
    middleplayerVS.innerHTML = 
    `<p style="text-align:center;">
      <img style="height:200px" src="imagesGifs/pika3.gif">
       YOU WON THE BATTLE 
       <br> 
      <button class='resetButton' onclick="location.reload()">
       PLAY AGAIN
      </button>
     </p>
    `;
    moves.forEach((btn) => {
      btn.removeEventListener('click');
    })
  } else if (playerScore.losses === 5) {
    middleplayerVS.innerHTML = `<p style="text-align:center;">
    <img style="height:200px" src="imagesGifs/pika4.gif">
      some TRAINER WON THE BATTLE 
     <br> 
    <button class='resetButton' onclick="location.reload()">
     PLAY AGAIN
    </button>
   </p>
    `;
    moves.forEach((btn) => {
      btn.removeEventListener('click');
    })
  } 
}

moves.forEach((btn) => {
  btn.addEventListener('click', () => {
    GAME(btn);
  })
});








// function FiveRoundgame() {
//   let myScore = 0;
//   let cpScore = 0;
//   let draws = 0;

// for (let i = 0; i < 5; i++) {
//   let smth = playRound();
//   if (smth === 'u win') {
//     myScore++;
//   } else if (smth === 'you lose') {
//     cpScore++;
//   } else {
//     draws++;
//   }
// };

// console.log('me :' + myScore, ', cp :' + cpScore,', draw :' +  draws);

// if (myScore > cpScore) {
//   return 'DARA WINS THE GAME!';
// } else if (cpScore > myScore) {
//   return 'COMPUBRO WINS THE GAME!'
// } else if (cpScore === myScore) {
//   return 'ITS A DRAW'
// };

// //THIS IS FOR FIRST TO 5 WINS 
//       // while (myScore < 5 || cpScore < 5) {
//       //   let smth = playRound();
//       //   if (smth === 'u win') {
//       //     myScore++;
//       //   } else if (smth === 'you lose') {
//       //     cpScore++;
//       //   }
//       // }

//       // if (myScore === 5) {
//       //   return 'DARA WINS THE GAME!';
//       // } else if (cpScore === 5) {
//       //   return 'COMPUBRO WINS THE GAME!'
//       // } else if (cpScore === myScore) {
//       //   return 'ITS A DRAW'
//       // }

// }