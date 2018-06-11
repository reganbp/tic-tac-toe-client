//
// if (this = '#ticOne') {
//   let spotRow = 0
//   let spotColumn = 0
// }
// } else if ($(this) = $('#ticTwo')) {
//   let spotRow = 0
//   let spotColumn = 1
// } else if ($(this) = $('#ticThree')) {
//   let spotRow = 0
//   let spotColumn = 2
// } else if ($(this) = $('#ticFour')) {
//   let spotRow = 1
//   let spotColumn = 0
// } else if ($(this) = $('#ticFive')) {
//   let spotRow = 1
//   let spotColumn = 1
// } else if ($(this) = $('#ticSix')) {
//   let spotRow = 1
//   let spotColumn = 2
// } else if ($(this) = $('#ticSeven')) {
//   let spotRow = 2
//   let spotColumn = 0
// } else if ($(this) = $('#ticEight')) {
//   let spotRow = 2
//   let spotColumn = 1
// } else if ($(this) = $('#ticNine')) {
//   let spotRow = 2
//   let spotColumn = 2
// }

// if (player === playerOne) {
//   $(this).css('background', 'black')
// } else {
//   $(this).css('background', 'yellow')
// }

// All below most likeley needs to go to be moved to a new file later
// const gameBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const playerOne = 'X'
// const playerTwo = 'O'
// let player = playerOne
//
// if (player === playerOne) {
//   console.log(playerOne + "'s turn")
// } else {
//   console.log(playerTwo + "'s turn")
// }
//
// const playGame = function (spotRow, spotColumn, whoIs) {
//   // First should check if the spot is available to be played, then if if is the player who chooses the spot whill have their letter (x/o) applied and the player is switched.
//   if (typeof gameBoard[spotRow][spotColumn] === 'string') {
//     console.log('You cannot move there, try again')
//   } else {
//     gameBoard[spotRow][spotColumn] = whoIs
//     if (whoIs === playerOne) {
//       player = playerTwo
//     } else {
//       player = playerOne
//     }
//     console.log(gameBoard)
//   }
//   // Second, check to see for winner, if there is one, end the game
//   for (let i = 0; i < gameBoard.length; i++) {
//     let endGame
//     if ((gameBoard[0][i] === gameBoard[1][i]) && (gameBoard[0][i] === gameBoard[2][i])) {
//       console.log(whoIs, 'wins!')
//       endGame = true
//     } else if ((gameBoard[i][0] === gameBoard[i][1]) && (gameBoard[i][0] === gameBoard[i][2])) {
//       console.log(whoIs, 'wins')
//       endGame = true
//     } else if ((gameBoard[2][i] === gameBoard[i][2]) && (gameBoard[2][i] === gameBoard[1][1])) {
//       console.log(whoIs, 'wins')
//       endGame = true
//     } else if ((gameBoard[i][0] === gameBoard[i][1]) && (gameBoard[i][1] === gameBoard[i][2])) {
//       console.log(whoIs, 'wins')
//       endGame = true
//     }
//     // Reset the game
//     if (endGame) {
//       gameBoard[0][0] = 1
//       gameBoard[0][1] = 2
//       gameBoard[0][2] = 3
//       gameBoard[1][0] = 4
//       gameBoard[1][1] = 5
//       gameBoard[1][2] = 6
//       gameBoard[2][0] = 7
//       gameBoard[2][1] = 8
//       gameBoard[2][2] = 9
//     }
//   }
//   console.log(gameBoard)
// }

// Test the game, but can be moved to test later if desired
// playGame(1, 1, player)
// playGame(0,0,player)
// playGame(1,0, player)
// playGame(0,1, player)
// playGame(1,2, player)
//
// playGame(1,1, player)
// playGame(0,1,player)
// playGame(0,0, player)
// playGame(0,2, player)
// playGame(2,2, player)
//
// playGame(1,1, player)
// playGame(0,1,player)
// playGame(2,0, player)
// playGame(0,0, player)
// playGame(0,2, player)
