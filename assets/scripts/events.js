const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')

// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked

const gameBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const playerOne = 'X'
const playerTwo = 'O'
let player = playerOne
let endGame = false
const win = function (winner) {
  if (winner === playerOne) {
    $('.box').html('Black Squares Win!!!!')
    $('#turn').html('Player One is the winner!!')
  } else {
    $('.box').html('White Squares Win!!!!')
    $('#turn').html('Player Two is the winner!!')
  }
  $('.box').css('background', 'red')
}

const playGame = function (spotRow, spotColumn, whoIs) {
  // First should check if the spot is available to be played, then if if is the player who chooses the spot whill have their letter (x/o) applied and the player is switched.
  if (endGame) {
    return
  }
  if (player === playerOne) {
    $('#turn').html('Turn: Player Two')
  } else {
    $('#turn').html('Turn: Player One')
  }
  if (typeof gameBoard[spotRow][spotColumn] === 'string') {
    console.log('You cannot move there, try again')
    $('#turn').html('You cannot move there, try again')
  } else {
    gameBoard[spotRow][spotColumn] = whoIs
    if (whoIs === playerOne) {
      player = playerTwo
      console.log('changing turn', player)
    } else {
      player = playerOne
      console.log('changing turn', player)
    }
    console.log(gameBoard)
  }
  // Second, check to see for winner, if there is one, end the game
  for (let i = 0; i < gameBoard.length; i++) {
    if ((gameBoard[0][i] === gameBoard[1][i]) && (gameBoard[0][i] === gameBoard[2][i])) {
      console.log(whoIs, 'wins!')
      endGame = true
    } else if ((gameBoard[i][0] === gameBoard[i][1]) && (gameBoard[i][0] === gameBoard[i][2])) {
      console.log(whoIs, 'wins?')
      endGame = true
    } else if ((gameBoard[2][0] === gameBoard[0][2]) && (gameBoard[2][i] === gameBoard[1][1])) {
      console.log(whoIs, 'wins.')
      endGame = true
    } else if ((gameBoard[0][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][2])) {
      console.log(whoIs, 'wins')
      endGame = true
    }
    // if not, tell them to play again
    if (endGame === false && typeof gameBoard[0][0] === 'string' && typeof gameBoard[0][1] === 'string' && typeof gameBoard[0][2] === 'string' && typeof gameBoard[1][0] === 'string' && typeof gameBoard[1][1] === 'string' && typeof gameBoard[1][2] === 'string' && typeof gameBoard[2][0] === 'string' && typeof gameBoard[2][1] === 'string' && typeof gameBoard[2][2] === 'string') {
      console.log('No More Moves, Start Over')
      $('#turn').html('It\'s a tie, please play again')
    }
    // Reset the game
    if (endGame) {
      console.log(whoIs, 'set who is')
      gameBoard[0][0] = whoIs
      gameBoard[0][1] = whoIs
      gameBoard[0][2] = whoIs
      gameBoard[1][0] = whoIs
      gameBoard[1][1] = whoIs
      gameBoard[1][2] = whoIs
      gameBoard[2][0] = whoIs
      gameBoard[2][1] = whoIs
      gameBoard[2][2] = whoIs
      win(whoIs)
    }
  }
  console.log(gameBoard)
}
const determineColor = function (spotRow, spotColumn, player) {
  if (typeof gameBoard[spotRow][spotColumn] === 'string') {
  } else if (player === playerOne) {
    return 'black'
    // $(this).css('background', 'black')
  } else {
    return 'white'
    // $(this).css('background', 'yellow')
  }
}
const onClick1 = function () {
  const value = player
  $(this).css('background', determineColor(0, 0, player))
  playGame(0, 0, player)
  const index = 0

  authApi.updateGame(index, value, endGame)
    .then(authUi.updateSuccess)
    .catch(authUi.updateFailure)
}

const onClick2 = function () {
  const value = player
  $(this).css('background', determineColor(0, 1, player))
  playGame(0, 1, player)
  const index = 1

  authApi.updateGame(index, value, endGame)
    .then(authUi.updateSuccess)
    .catch(authUi.updateFailure)
}
const onClick3 = function () {
  const value = player
  $(this).css('background', determineColor(0, 2, player))
  playGame(0, 2, player)
  const index = 2

  authApi.updateGame(index, value, endGame)
    .then(authUi.updateSuccess)
    .catch(authUi.updateFailure)
}
const onClick4 = function () {
  const value = player
  $(this).css('background', determineColor(1, 0, player))
  playGame(1, 0, player)
  const index = 3

  authApi.updateGame(index, value, endGame)
    .then(authUi.updateSuccess)
    .catch(authUi.updateFailure)
}
const onClick5 = function () {
  const value = player
  $(this).css('background', determineColor(1, 1, player))
  playGame(1, 1, player)
  const index = 4

  authApi.updateGame(index, value, endGame)
    .then(authUi.updateSuccess)
    .catch(authUi.updateFailure)
}
const onClick6 = function () {
  const value = player
  $(this).css('background', determineColor(1, 2, player))
  playGame(1, 2, player)
  const index = 5

  authApi.updateGame(index, value, endGame)
    .then(authUi.updateSuccess)
    .catch(authUi.updateFailure)
}
const onClick7 = function () {
  const value = player
  $(this).css('background', determineColor(2, 0, player))
  playGame(2, 0, player)
  const index = 6

  authApi.updateGame(index, value, endGame)
    .then(authUi.updateSuccess)
    .catch(authUi.updateFailure)
}
const onClick8 = function () {
  const value = player
  $(this).css('background', determineColor(2, 1, player))
  playGame(2, 1, player)
  const index = 7

  authApi.updateGame(index, value, endGame)
    .then(authUi.updateSuccess)
    .catch(authUi.updateFailure)
}
const onClick9 = function () {
  const value = player
  $(this).css('background', determineColor(2, 2, player))
  playGame(2, 2, player)
  const index = 8

  authApi.updateGame(index, value, endGame)
    .then(authUi.updateSuccess)
    .catch(authUi.updateFailure)
}
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)
}
const onChangePw = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePw(data)
    .then(function () {
      console.log('response is ', data)
    })
    .catch(function (error) {
      console.log('response is ', error)
    })
}
const onSignOut = function (event) {
  event.preventDefault()

  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}
const onPlayAgain = function (event) {
  event.preventDefault()
  console.log('you clicked me')
  $('.box').css('background', 'rgb(128, 128, 128)')
  $('.box').html('')
  $('#turn').html('Turn: Player One')

  gameBoard[0][0] = 1
  gameBoard[0][1] = 2
  gameBoard[0][2] = 3
  gameBoard[1][0] = 4
  gameBoard[1][1] = 5
  gameBoard[1][2] = 6
  gameBoard[2][0] = 7
  gameBoard[2][1] = 8
  gameBoard[2][2] = 9

  player = playerOne
  endGame = false

  console.log(gameBoard)

  authApi.newGame()
    .then(authUi.newGameSuccess)
    .catch(authUi.newGameFailure)
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
  onClick9,
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onPlayAgain
  // onUpdateGame
  // onUsername
}
