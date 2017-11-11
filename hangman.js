var inquirer = require("inquirer");
// var blankedOutWord = require("./letters.js");
var numberGuesses = 6;
var importedWord = require("./letters.js");
var answerWord = importedWord.randomWord
var blankedOutWord = importedWord.blankedOutWord
var wrongLetters = [];
var arrAnswerWord= [];
var letterCounter = 0;
var updatedWordWithGuesses = [];


gameSetup()
function gameSetup (){
	numberGuesses = 6;
	arrAnswerWord= answerWord.split("");
	letterCounter = arrAnswerWord.length;
	console.log(blankedOutWord)
	updatedWordWithGuesses = [];
	wrongLetters = [];
	for (var i = 0; i < letterCounter; i++){
		updatedWordWithGuesses.push("_");
	}
	askquestions();
}
function askquestions (){
	inquirer.prompt({
		type: "value",
		name: "userGuess",
		message: "Guess a letter!"
	}).then(function(guess) {
		matchLetter(guess.userGuess);

/*		var guessedLetter = new Letter(guess.userGuess);*/

	});
}

function matchLetter(letter) {
	var matched = false;

	for (var i = 0; i < letterCounter; i++) {
		if(answerWord[i] === letter ) {
			matched = true;
		}
	}
	if (matched) {
		for (var j = 0; j < letterCounter; j++) {
			if (answerWord[j] === letter) {
				updatedWordWithGuesses[j] = letter
			}
		}
		console.log("\x1b[32m%s\x1b[0m", "CORRECT!!!");
		console.log(updatedWordWithGuesses);
	}
	else{
		wrongLetters.push(letter);
		numberGuesses--;
		console.log(numberGuesses)
		console.log("\x1b[31m%s\x1b[0m", "INCORRECT!!!");
	}
}




//change words into blanks
//number of wrongs counter
//if win, start a new game
//if loss, start a new game
//If total loss, ask to play again