const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')

// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked

const gameBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const playerOne = 'X'
const playerTwo = 'O'
let playerX = 0
let playerO = 0
let player = playerOne
let endGame = false

const win = function (winner) {
  if (winner === playerOne) {
    // $('.box').html('Black Squares Win!!!!')
    $('#turn').html('Player One is the winner!!')
    playerX++
    // console.log(playerX)
  } else {
    // $('.box').html('White Squares Win!!!!')
    $('#turn').html('Player Two is the winner!!')
    playerO++
    // console.log(playerO)
  }
  $('.box').css('background', '#b92f2f')
  $('#ticOne').html('Y')
  $('#ticTwo').html('O')
  $('#ticThree').html('U')
  $('#ticSeven').html('W')
  $('#ticEight').html('O')
  $('#ticNine').html('N')
  $('#scoreOne').html(playerX)
  $('#scoreTwo').html(playerO)
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
    // console.log('You cannot move there, try again')
    $('#turn').html('You cannot move there, try again')
  } else {
    gameBoard[spotRow][spotColumn] = whoIs
    if (whoIs === playerOne) {
      player = playerTwo
      // console.log('changing turn', player)
    } else {
      player = playerOne
      // console.log('changing turn', player)
    }
    // console.log(gameBoard)
  }
  // Second, check to see for winner, if there is one, end the game
  for (let i = 0; i < gameBoard.length; i++) {
    if ((gameBoard[0][i] === gameBoard[1][i]) && (gameBoard[0][i] === gameBoard[2][i])) {
      // console.log(whoIs, 'wins!')
      endGame = true
    } else if ((gameBoard[i][0] === gameBoard[i][1]) && (gameBoard[i][0] === gameBoard[i][2])) {
      // console.log(whoIs, 'wins?')
      endGame = true
    } else if ((gameBoard[2][0] === gameBoard[0][2]) && (gameBoard[2][i] === gameBoard[1][1])) {
      // console.log(whoIs, 'wins.')
      endGame = true
    } else if ((gameBoard[0][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][2])) {
      // console.log(whoIs, 'wins')
      endGame = true
    }
    // if not, tell them to play again
    if (endGame === false && typeof gameBoard[0][0] === 'string' && typeof gameBoard[0][1] === 'string' && typeof gameBoard[0][2] === 'string' && typeof gameBoard[1][0] === 'string' && typeof gameBoard[1][1] === 'string' && typeof gameBoard[1][2] === 'string' && typeof gameBoard[2][0] === 'string' && typeof gameBoard[2][1] === 'string' && typeof gameBoard[2][2] === 'string') {
      // console.log('No More Moves, Start Over')
      $('#turn').html('It\'s a tie, please play again')
      endGame = true
      return
    }
    // Reset the game
    if (endGame) {
      // console.log(whoIs, 'set who is')
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
      return
    }
  }
  // console.log(gameBoard)
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
  const index = 0
  if (endGame === false && typeof gameBoard[0][0] !== 'string') {
    authApi.updateGame(index, value, endGame)
      .then(authUi.updateSuccess)
      .catch(authUi.updateFailure)
    $(this).css('background', determineColor(0, 0, player))
    playGame(0, 0, player)
  } else if (endGame === false && typeof gameBoard[0][0] === 'string') {
    $('#turn').html('You cannot move there, try again')
  }
}
const onClick2 = function () {
  const value = player
  const index = 1
  if (endGame === false && typeof gameBoard[0][1] !== 'string') {
    authApi.updateGame(index, value, endGame)
      .then(authUi.updateSuccess)
      .catch(authUi.updateFailure)
    $(this).css('background', determineColor(0, 1, player))
    playGame(0, 1, player)
  } else if (endGame === false && typeof gameBoard[0][1] === 'string') {
    $('#turn').html('You cannot move there, try again')
  }
}
const onClick3 = function () {
  const value = player
  const index = 2
  if (endGame === false && typeof gameBoard[0][2] !== 'string') {
    authApi.updateGame(index, value, endGame)
      .then(authUi.updateSuccess)
      .catch(authUi.updateFailure)
    $(this).css('background', determineColor(0, 2, player))
    playGame(0, 2, player)
  } else if (endGame === false && typeof gameBoard[0][2] === 'string') {
    $('#turn').html('You cannot move there, try again')
  }
}
const onClick4 = function () {
  const value = player
  const index = 3
  if (endGame === false && typeof gameBoard[1][0] !== 'string') {
    authApi.updateGame(index, value, endGame)
      .then(authUi.updateSuccess)
      .catch(authUi.updateFailure)
    $(this).css('background', determineColor(1, 0, player))
    playGame(1, 0, player)
  } else if (endGame === false && typeof gameBoard[1][0] === 'string') {
    $('#turn').html('You cannot move there, try again')
  }
}
const onClick5 = function () {
  const value = player
  const index = 4
  if (endGame === false && typeof gameBoard[1][1] !== 'string') {
    authApi.updateGame(index, value, endGame)
      .then(authUi.updateSuccess)
      .catch(authUi.updateFailure)
    $(this).css('background', determineColor(1, 1, player))
    playGame(1, 1, player)
  } else if (endGame === false && typeof gameBoard[1][1] === 'string') {
    $('#turn').html('You cannot move there, try again')
  }
}
const onClick6 = function () {
  const value = player
  const index = 5
  if (endGame === false && typeof gameBoard[1][2] !== 'string') {
    authApi.updateGame(index, value, endGame)
      .then(authUi.updateSuccess)
      .catch(authUi.updateFailure)
    $(this).css('background', determineColor(1, 2, player))
    playGame(1, 2, player)
  } else if (endGame === false && typeof gameBoard[1][2] === 'string') {
    $('#turn').html('You cannot move there, try again')
  }
}
const onClick7 = function () {
  const value = player
  const index = 6
  if (endGame === false && typeof gameBoard[2][0] !== 'string') {
    authApi.updateGame(index, value, endGame)
      .then(authUi.updateSuccess)
      .catch(authUi.updateFailure)
    $(this).css('background', determineColor(2, 0, player))
    playGame(2, 0, player)
  } else if (endGame === false && typeof gameBoard[2][0] === 'string') {
    $('#turn').html('You cannot move there, try again')
  }
}
const onClick8 = function () {
  const value = player
  const index = 7
  if (endGame === false && typeof gameBoard[2][1] !== 'string') {
    authApi.updateGame(index, value, endGame)
      .then(authUi.updateSuccess)
      .catch(authUi.updateFailure)
    $(this).css('background', determineColor(2, 1, player))
    playGame(2, 1, player)
  } else if (endGame === false && typeof gameBoard[2][1] === 'string') {
    $('#turn').html('You cannot move there, try again')
  }
}
const onClick9 = function () {
  const value = player
  const index = 8
  if (endGame === false && typeof gameBoard[2][2] !== 'string') {
    authApi.updateGame(index, value, endGame)
      .then(authUi.updateSuccess)
      .catch(authUi.updateFailure)
    $(this).css('background', determineColor(2, 2, player))
    playGame(2, 2, player)
  } else if (endGame === false && typeof gameBoard[2][2] === 'string') {
    $('#turn').html('You cannot move there, try again')
  }
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
  // console.log('data is ', data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)
}
const onChangePw = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePw(data)
    .then(authUi.passwordPass)
    .catch(authUi.passwordFail)
}
const onSignOut = function (event) {
  event.preventDefault()

  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)

  $('#out-success').modal()
  $('#scoreOne').html('')
  $('#scoreTwo').html('')
  $('#sign-in-button').show()
  $('#sign-up-button').show()
  $('.after-button').hide()
  $('#welcome').html('Please log in')

  // $('.box').css('background', 'rgb(128, 128, 128)')
  // $('.box').html('')
  // $('#turn').html('Turn: Player One')
  $('.box').hide()
  $('.scores').hide()
  $('#gameshow').hide().html('')
  $('#gamelog').hide().html('')
  $('#turn').hide()

  gameBoard[0][0] = 1
  gameBoard[0][1] = 2
  gameBoard[0][2] = 3
  gameBoard[1][0] = 4
  gameBoard[1][1] = 5
  gameBoard[1][2] = 6
  gameBoard[2][0] = 7
  gameBoard[2][1] = 8
  gameBoard[2][2] = 9

  playerX = 0
  playerO = 0
}
const onPlayAgain = function (event) {
  event.preventDefault()
  // console.log('you clicked me')
  $('.box').css('background', 'rgb(128, 128, 128)')
  $('.box').html('')
  $('#turn').html('Turn: Player One')
  $('.box').show()
  $('.scores').show()
  $('#gameshow').hide()
  $('#gamelog').hide()
  $('#turn').show()

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

  // console.log(gameBoard)

  authApi.newGame()
    .then(authUi.newGameSuccess)
    .catch(authUi.newGameFailure)
}
const onGetGame = function (event) {
  event.preventDefault()
  authApi.getGame()
    .then(authUi.getGameSuccess)
    .catch(authUi.getGameFailure)
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
  onPlayAgain,
  onGetGame
}
