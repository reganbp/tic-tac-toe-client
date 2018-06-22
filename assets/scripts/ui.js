const store = require('./store')

const signUpSuccess = function (signUpResponse) {
  // console.log('signUpResponse ', signUpResponse)
  $('#sign-up-modal').modal('hide')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  $('#in-success').modal()
}
const signUpFailure = function (signUpError) {
  // console.log('The sign up error is ', signUpError)
  $('#form-fail').modal()
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
}
const signInSuccess = function (response) {
  // console.log('response ', response)
  store.user = response.user
  // alert('Success')
  $('#sign-in-modal').modal('hide')
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  $('#in-success').modal()
  $('#sign-in-button').hide()
  $('#sign-up-button').hide()
  $('.after-button').show()
  $('#welcome').html('Click on New Game to play!')
}
const signInFailure = function (signInError) {
  // console.log('The sign in error is ', signInError)
  $('#form-fail').modal()
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
}
const signOutSuccess = function (response) {
  // console.log('Goodbye ', response)
  delete store.user
  // console.log('the new store is ', store)
}
const signOutFailure = function (signOutError) {
  // console.log('The sign in error is ', signOutError)
  $('#out-fail').modal()
}
const newGameSuccess = function (newGameResponse) {
  // console.log('You have started a new game', newGameResponse)
  store.game = newGameResponse.game
}
const newGameFailure = function (newGameResponse) {
  // console.log('You have made an error', newGameResponse)
  $('#game-fail').modal()
}
const updateSuccess = function (updateResponse) {
  // console.log('I have been updated', updateResponse)
  $('#gamelog').html(updateResponse.game.cells)
}
const updateFailure = function (updateResponse) {
  // console.log('Failure is an option', updateResponse)
}
const getGameSuccess = function (getResponse) {
  // console.log('get game is', getResponse)
  // $('#get-game-success').modal()
  $('#gameshow').html('Games played: ' + getResponse.games.length).show()
}
const getGameFailure = function (getResponse) {
  // console.log('failed to get games', getResponse)
  $('#gameshow').html('You have no games').show()
  // $('#get-game-success').modal()
}
const passwordPass = function () {
  $('#password-modal').modal('hide')
  document.getElementById('change-password-form').reset()
  $('#in-success').modal()
}
const passwordFail = function () {
  $('#pass-fail').modal()
  document.getElementById('change-password-form').reset()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  updateSuccess,
  updateFailure,
  getGameSuccess,
  getGameFailure,
  passwordPass,
  passwordFail
}
