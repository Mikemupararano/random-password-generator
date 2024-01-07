// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
//Joined special characters
const newSpecialCharacters= specialCharacters.join("");
//console.log(newSpecialCharacters);
//Output='@%+\/'!#$^?:,)(}{][~-_.'
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//Removing comas between elements
const newNumbers=numericCharacters.join("");
//console.log(newNumbers) output '0123456789'
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
//Removing comas and spaces from lowercase characters
const newLowerCase =lowerCasedCharacters.join("");
//console.log(newLowerCase); Output='abcdefghijklmnopqrstuvwxyz'
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
//Removing commas and spaces from the uppercase characters
const newUpperCase=upperCasedCharacters.join("");
//console.log(newUpperCase);
//Output='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);