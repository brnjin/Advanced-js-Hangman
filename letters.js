var randomWord = require("./word-bank.js");
var answerWord = randomWord.answerWord();

console.log(answerWord)
//function or constructor to display word
/*function Letter() {

*/}
// Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.