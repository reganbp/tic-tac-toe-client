// const getFormFields = require('../../lib/get-form-fields')
// const authApi = require('./api')
// const authUi = require('./ui')

// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked

const gameBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const playerOne = 'X'
const playerTwo = 'O'
let player = playerOne

const playGame = function (spotRow, spotColumn, whoIs) {
  // First should check if the spot is available to be played, then if if is the player who chooses the spot whill have their letter (x/o) applied and the player is switched.

  if (typeof gameBoard[spotRow][spotColumn] === 'string') {
    console.log('You cannot move there, try again')
  } else {
    gameBoard[spotRow][spotColumn] = whoIs
    if (whoIs === playerOne) {
      player = playerTwo
    } else {
      player = playerOne
    }
    console.log(gameBoard)
  }
  // Second, check to see for winner, if there is one, end the game
  for (let i = 0; i < gameBoard.length; i++) {
    let endGame
    if ((gameBoard[0][i] === gameBoard[1][i]) && (gameBoard[0][i] === gameBoard[2][i])) {
      console.log(whoIs, 'wins!')
      endGame = true
    } else if ((gameBoard[i][0] === gameBoard[i][1]) && (gameBoard[i][0] === gameBoard[i][2])) {
      console.log(whoIs, 'wins')
      endGame = true
    } else if ((gameBoard[2][i] === gameBoard[i][2]) && (gameBoard[2][i] === gameBoard[1][1])) {
      console.log(whoIs, 'wins')
      endGame = true
    } else if ((gameBoard[i][0] === gameBoard[i][1]) && (gameBoard[i][1] === gameBoard[i][2])) {
      console.log(whoIs, 'wins')
      endGame = true
    }
    // Reset the game
    if (endGame) {
      gameBoard[0][0] = 1
      gameBoard[0][1] = 2
      gameBoard[0][2] = 3
      gameBoard[1][0] = 4
      gameBoard[1][1] = 5
      gameBoard[1][2] = 6
      gameBoard[2][0] = 7
      gameBoard[2][1] = 8
      gameBoard[2][2] = 9
    }
  }
  console.log(gameBoard)
}
// if (player = playerOne) {
//   $(this).css('background', 'black')
// } else {
//   $(this).css('background', 'yellow')
// }
const onClick1 = function () {
  $(this).css('background', 'black')
  playGame(0, 0, player)
}
const onClick2 = function () {
  $(this).css('background', 'black')
  playGame(0, 1, player)
}
const onClick3 = function () {
  $(this).css('background', 'black')
  playGame(0, 2, player)
}
const onClick4 = function () {
  $(this).css('background', 'black')
  playGame(1, 0, player)
}
const onClick5 = function () {
  $(this).css('background', 'black')
  playGame(1, 1, player)
}
const onClick6 = function () {
  $(this).css('background', 'black')
  playGame(1, 2, player)
}
const onClick7 = function () {
  $(this).css('background', 'black')
  playGame(2, 0, player)
}
const onClick8 = function () {
  $(this).css('background', 'black')
  playGame(2, 1, player)
}
const onClick9 = function () {
  $(this).css('background', 'black')
  playGame(2, 2, player)
}
module.exports = {
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  onClick5,
  onClick6,
  onClick7,
  onClick8,
  onClick9
}
