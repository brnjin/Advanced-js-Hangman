//constructor for word
function Word () {
	this.animalChoices = [
	"turtle",
	"moose",
	"cat",
	"dog",
	"monkey",
	"giraffe",
	"flying squirrel"];
	//Gives random word from animalChoices
	this.answerWord = function(){
		var randomWord = this.animalChoices[Math.floor(Math.random() 
			* this.animalChoices.length)];
		return randomWord
	};
};
//Involking the answerWord function inside the Word constructor
var word = new Word().answerWord();


//Export to letter.js and hangman.js
module.exports = word;
