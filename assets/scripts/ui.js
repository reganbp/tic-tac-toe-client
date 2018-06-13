const store = require('./store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse ', signUpResponse)
  $('#sign-up-modal').modal('hide')
}
const signUpFailure = function (signUpError) {
  console.log('The sign up error is ', signUpError)
  $('#form-fail').modal()
}
const signInSuccess = function (response) {
  console.log('response ', response)
  store.user = response.user
  // alert('Success')
  $('#sign-in-modal').modal('hide')
}
const signInFailure = function (signInError) {
  console.log('The sign in error is ', signInError)
  $('#form-fail').modal()
}
const signOutSuccess = function (response) {
  console.log('Goodbye ', response)
  delete store.user
  console.log('the new store is ', store)
  $('#out-success').modal()
  $('#scoreOne').html('')
  $('#scoreTwo').html('')
}
const signOutFailure = function (signOutError) {
  console.log('The sign in error is ', signOutError)
  $('#out-fail').modal()
}
const newGameSuccess = function (newGameResponse) {
  console.log('You have started a new game', newGameResponse)
  store.game = newGameResponse.game
}
const newGameFailure = function (newGameResponse) {
  console.log('You have made an error', newGameResponse)
  $('#game-fail').modal()
}
const updateSuccess = function (updateResponse) {
  console.log('I have been updated', updateResponse)
  $('#gamelog').html(updateResponse.game.cells)
}
const updateFailure = function (updateResponse) {
  console.log('Failure is an option', updateResponse)
}
const getGameSuccess = function (getResponse) {
  console.log('get game is', getResponse)
  $('#gameshow').html('Games played: ' + getResponse.games.length)
}
const getGameFailure = function (getResponse) {
  console.log('failed to get games', getResponse)
  $('#gameshow').html('You have no games')
}
const passwordPass = function () {
  $('#password-modal').modal('hide')
}
const passwordFail = function () {
  $('#pass-fail').modal()
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
