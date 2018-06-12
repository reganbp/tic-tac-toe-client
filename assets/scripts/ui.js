const store = require('./store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse ', signUpResponse)
}
const signUpFailure = function (signUpError) {
  console.log('The sign up error is ', signUpError)
}
const signInSuccess = function (response) {
  console.log('response ', response)
  store.user = response.user
}
const signInFailure = function (signInError) {
  console.log('The sign in error is ', signInError)
}
const signOutSuccess = function (response) {
  console.log('Goodbye ', response)
  delete store.user
  console.log('the new store is ', store)
}
const signOutFailure = function (signOutError) {
  console.log('The sign in error is ', signOutError)
}
const newGameSuccess = function (newGameResponse) {
  console.log('You have started a new game', newGameResponse)
  store.game = newGameResponse.game
}
const newGameFailure = function (newGameResponse) {
  console.log('You have made an error', newGameResponse)
}
const updateSuccess = function (updateResponse) {
  console.log('I have been updated', updateResponse)
}
const updateFailure = function (updateResponse) {
  console.log('Failure is an option', updateResponse)
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
  updateFailure
}
