//this program will ask your input for your first and last name in the terminal. All the npm prompt sync files that have been installed
// through the terminal need to be in the same directory as the .js pro
gram
const prompt = require('prompt-sync')();

var firstName = prompt("Please enter your first name: ");
var lastName = prompt("Please enter your last name: "); 

console.log("Your Full name is",firstName,lastName);