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
	this.answerWord = function(){
		console.log( animalChoices[Math.floor(Math.random()*animalChoices.length)]);
	};
	console.log(this.answerWord());
//used to create an object repsenting the current word 
// it should contain specific logic and data
};

Word.prototype.randomWord = function(){
	return answerWord();
};
module.exports = Word;