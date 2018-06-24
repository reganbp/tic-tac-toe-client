This is a simple Tic-Tac-Toe game Single Page Application.
---
Planning

This project was planned with a few simple steps.  First was to create user stories to figure out what I would want in this page if I came across it (see bottom of page).  After asking what the user would want, I designed wireframes to try and see what the page should look like.  Then it was time to lay out a schedule and task list, step by step, for how the project should be completed in an effecient way. I wanted to set up tasks that were small enough to be completed, and if done in order would build the larger application.  For this project, I attempted my tasks in the following order.

  - Build a game board in JavaScript
  - Build a functioning game program in JavaScript
  - Build the basic visual representation with HTML
  - Set event listeners with jQuery
  - Connect the event listners to the correct JavaScript actions to run the game and have the visual gameboard change along with it
  - Add authenication
    - Sign Up
    - Sign In
    - Update gameboard
    - Change password
    - Sign Out
  - Fix bugs
  - Update styling

---
Development

I started the development of this project by first building the gameboard in JavaScript.  To accomplish this, I created a 2d array to act as the board, and decided that the game would add X's and O's into the array.  After the gameboard was developed, I began building a functioning game engine.  As a player played the game, the program would add their corresponding X or O to the board, and then check for a winner.  This was done with a simple for loop with if/else statements to check whether or not there was a matching 3 in a row combination.  If the loop came back with no winner, the player would automatically be switched to the next player (with only two players it would switch from player X to player O and vice versa) and wait for the next inputted turn.  If the game conditions produced a winner, then the game ended.

The next task was to build a gameboard on the screen for the user to interact with.  This was done with HTML and bootstrap to make boxes on the screen.  jQuery was then used to set up event listeners for clicks on the board.  When a square was clicked, the game program was run in JavaScript, and jQuery handled the HTML and CSS switches for the users view.  On a complete game, jQuery was used to announce this to the players.

Authentication was added to save user information such as their log in information, and their game information.  Games were updated with each click of a square and updated in the users game information.  For each authentication, a success or failure action was required to give commands to the UI, so that the correct information would be displayed on the screen for every action.  Authentication was achieved by making ajax request using jQuery and JSON, with JavaScript running appropriate actions in the program.

Debugging the program took the longest time complete, as every bug fixed would often cause another bug to appear.  I tried to systematically solve these bugs one at a time.  For example, the game was still allowed to be played after a winning combination was found, which was both apparent in the JavaScript engine and on the screen display.  I decided it would be better to solve the game engine problem first, instead of trying to make it appear on the screen as if the game was truly over.  This was because it was more important that the game program was running correctly than that the right display appeared.  If the game engine was fixed I assumed it would be easier to display the corresponding view.  This of course added other bugs to the application (for example it would now throw an error for clicking on a square that was unavailable).  This is just one example, but it is representative of how I tried to break down problems to get the application to run smoothly.

Styling was added as needed during the development.  There were times when updated styling was required to help show actions that were completed.  While I had planned to leave this part for the end, it was more prudent to update as I went along and added more jQuery into the program.

---
Unsolved Problems and Future Fixes

There were many parts of this game that I would have completed in a different way if I were to update.  One problem I had was that I was forced to hard code in many actions, when I am sure there was a more general way to do it.  For example, I needed event listeners for each square, even though they were all of the same class and performed the same functions.  I would like to get this down to one event listener that would change the game board for any square clicked instead of a listner that was only good for one square.  I would also fix my gameboard to change it from a 2d array down to a flat array.  I believe this would help with the click handling and it would also correspond with the expected input for the updated game array.

---
Technologies

- JavaScript used for
  - game engine
  - authenication
- jQuery used for
  - event listeners
  - setting ajax calls for authentication
  - changing HTML and CSS when actions were made
- HTML/CSS
  - page views
  - styling
  - in conjuntion with jQuery to update as the user interacted
- Shell commands
  - curl scripts to test authentication calls for expected inputs

---
Wireframes

[Wireframe 1](https://i.imgur.com/3v3Iwey.jpg)
[Wireframe 2](https://i.imgur.com/Mzjw9AO.jpg)
[Wireframe 3](https://i.imgur.com/BjWB3YH.jpg)

---
User Stories

As a user of this game I would like...
  - To be able to save scores
  - See a top score list
  - Share scores with other users
  - Play against the computer
  - Message or comment to other users
  - Customize my game (change X's and O's to something else)
