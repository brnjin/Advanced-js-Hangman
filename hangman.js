//Node package 
var inquirer = require("inquirer");
var numberGuesses = 6;
//Setting variable to import specific data
var importedWord = require("./letters.js");
//Imports word solution
var answerWord = importedWord.randomWord
//Blanked out word user is trying to guess
var blankedOutWord = importedWord.blankedOutWord
//holds all the wrong letters
var wrongLetters = [];
//turns the answer word into array 
var arrAnswerWord= [];
var letterCounter = 0;
//Combines all the correct guesses
var updatedWordWithGuesses = [];

//start of the game
function gameSetup (){
	//reset number of guesses
	numberGuesses = 6;
	//turns answer word into array and stores in global variable arrAnswerWord
	arrAnswerWord= answerWord.split("");
	letterCounter = arrAnswerWord.length;
	//Displays how many characters the user is trying to guess
	console.log(blankedOutWord)
	//resets the guessed word
	updatedWordWithGuesses = [];
	//resets the user's wrong letters 
	wrongLetters = [];
	//loop to change array of answerword into blanks
	for (var i = 0; i < letterCounter; i++){
		updatedWordWithGuesses.push(" _ ");
	}
	//invoke inquirer questions
	askquestions();
}
function askquestions (){
	inquirer.prompt({
		type: "value",
		name: "userGuess",
		message: "Guess a letter!"
	}).then(function(guess) {
			matchLetter(guess.userGuess);
			endGame();
	});
}

//Goes through and replaces the correct letter in the right position
function matchLetter(letter) {
	var matched = false;

	for (var i = 0; i < letterCounter; i++) {
		if(answerWord[i] === letter ) {
			//Changes matched to true if the answerWord contains letter
			matched = true;
		}
	}
	//Once matched is true, it loops through to the occurance of the letter and replaces 
	if (matched) {
		for (var j = 0; j < letterCounter; j++) {
			if (answerWord[j] === letter) {
				updatedWordWithGuesses[j] = letter
			}
		}
		console.log("\n\x1b[32m%s\x1b[0m", "CORRECT!!!");
		console.log("\n" + updatedWordWithGuesses.join("") + "\n");
		endGame();
		askquestions();
	}
	else{
		wrongLetters.push(letter);
		//Subtracts every time user gets the letter incorrectly
		numberGuesses--;
		console.log("\n\x1b[31m%s\x1b[0m", "INCORRECT!!!");
		console.log("\n" + numberGuesses + " guesses remaining!");
		console.log("\nLetters guessed: " + wrongLetters);
		console.log("\n" + updatedWordWithGuesses.join("") + "\n");
		endGame();
		askquestions();

	}
}

function endGame() {
	if (updatedWordWithGuesses.toString() === answerWord) {
		console.log("You Won!");
		console.log("New game has started");
		gameSetup();
	}
	else if (numberGuesses === 0) {
		console.log("\nYou blew it! Thats it man, it's all over!")
		console.log("\nGood Luck, better not fail this time.")
		gameSetup();
	}
}

gameSetup();

//It is giving the same word if the user starts a new game without exiting the game
//I would 
