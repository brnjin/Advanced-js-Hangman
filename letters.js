var randomWord = require("./word-bank.js");
//Turning randomWord into array
var arrAnswerWord= randomWord.split("");
//capturing the "Blanked" version of the array
var blankedOutWord = [];


// function or constructor to display word
function Letter() {
	this.replaceGuessedWord = function(){
		//For loop through array and turn into _ or space
		for (var i = 0; i < arrAnswerWord.length; i++){
			if(arrAnswerWord[i] != " "){
				blankedOutWord.push("_");
			}else{
				blankedOutWord.push(' ');
			};
		};
	};
	replaceGuessedWord()

};
Letter()

module.exports.randomWord = randomWord;
module.exports.blankedOutWord = blankedOutWord;
//export to hangman.js
/*module.exports = blankedOutWord;*/

