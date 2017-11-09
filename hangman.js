var inquirer = require("inquirer");
/*var wordChoices = require("./word-bank.js");
var lettersTransfer = require("./letter.js");*/

inquirer.prompt({
	type: "value",
	name: "userGuess",
	message: "Guess a letter!"
}).then(function(guess) {
	console.log(guess.userGuess);
});
//change words into blanks
//number of wrongs counter
//if win
//if loss
//If total loss, ask to play again