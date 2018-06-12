'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
// your JS code goes here
  $('#ticOne').on('click', authEvents.onClick1)
  $('#ticTwo').on('click', authEvents.onClick2)
  $('#ticThree').on('click', authEvents.onClick3)
  $('#ticFour').on('click', authEvents.onClick4)
  $('#ticFive').on('click', authEvents.onClick5)
  $('#ticSix').on('click', authEvents.onClick6)
  $('#ticSeven').on('click', authEvents.onClick7)
  $('#ticEight').on('click', authEvents.onClick8)
  $('#ticNine').on('click', authEvents.onClick9)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePw)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.play-again').on('click', authEvents.onPlayAgain)
  $('#username').on('click', authEvents.onUsername)
  $('.get-games').on('click', authEvents.onGetGame)
})
