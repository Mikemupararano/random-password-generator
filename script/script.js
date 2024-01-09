// Array of special characters to be included in password that I have modified later by removing the commas.
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
var newSpecialCharacters= specialCharacters.join("");
//console.log(newSpecialCharacters);
//Output='@%+\/'!#$^?:,)(}{][~-_.'
// Array of numeric characters to be included in password. I removed commas.
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//Removing comas between elements
const newNumbers=numericCharacters.join("");
//console.log(newNumbers) output '0123456789'
// Array of lowercase characters to be included in password and I have removed commas.
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
//Removing comas and spaces from lowercase characters in array.
const newLowerCase =lowerCasedCharacters.join("");
//console.log(newLowerCase); Output='abcdefghijklmnopqrstuvwxyz'
// Array of uppercase characters to be included in password and I removed commas later.
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
var newUpperCase=upperCasedCharacters.join("");

//Removing commas and spaces from the uppercase characters
//const newUpperCase=upperCasedCharacters.join("");
//console.log(newUpperCase);

// Function to generate password with user input
function generatePassword(choices) {
var allCharacters ="";
if (choices.includeLowercase) {
  allCharacters +=lowerCasedCharacters;
}
if (choices.includeUppercase) {
  allCharacters +=upperCasedCharacters;
}
if(choices.includeNumeric) {
  allCharacters +=numericCharacters;
}
if (choices.includeSpecial) {
  allCharacters +=specialCharacters;
}

var password ="";
for (var i=0; i< choices.length; i++) {
var randomChar=allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));

password +=randomChar;
}
return password;
}

// Code for writing password to the #password input
function writePassword() {
  var choices= getPasswordOptions();
  var password = generatePassword(choices);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Code for adding event listener to generate button
var generateBtn =document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);

document.addEventListener("DOMContentLoaded", function () {
  // Arrays derived from joining characters in stater code
  var specialCharacters =newSpecialCharacters; // output="@%+\\/'!#$^?:,)(}{][~-_.";
  var numericCharacters =newNumbers; //output="0123456789";
  var lowerCasedCharacters = newLowerCase; //output="abcdefghijklmnopqrstuvwxyz";
  var upperCasedCharacters =newUpperCase ; //output="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//Code to prompt user to type the desired length of their password.
  function getPasswordOptions() {
    var length = prompt(
      "Enter the password length (between 8 and 128 characters):"
    );
    
    // if the length is less than 8 characters, is not a number or one of the desired characters, a user is prompted to correct the anomaly 
    while (length < 8 || length > 128 || isNaN(length)) {
      alert("Please enter a valid password length between 8 and 128.");
      length = prompt(
        "Enter the password length (between 8 and 128 characters):"
      );
    }

    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    // This code checks and makes sure that at least one character type is selected
    while (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumeric &&
      !includeSpecial
    ) {
      alert("At least one character type must be selected.");
      includeLowercase = confirm("Include lowercase characters?");
      includeUppercase = confirm("Include uppercase characters?");
      includeNumeric = confirm("Include numeric characters?");
      includeSpecial = confirm("Include special characters?");
    }
    //Used shorthand notation and replaced longer code.
    return {
      length: parseInt(length),
      includeLowercase,
      includeUppercase,
      includeNumeric,
      includeSpecial,
    };
    }
//generate the password:
  function generatePassword(choices) {
    var allCharacters = "";
    if (choices.includeLowercase) {
      allCharacters += lowerCasedCharacters;
    }
    if (choices.includeUppercase) {
      allCharacters += upperCasedCharacters;
    }
    if (choices.includeNumeric) {
      allCharacters += numericCharacters;
    }
    if (choices.includeSpecial) {
      allCharacters += specialCharacters;
    }

    var password = "";
    for (var i = 0; i < choices.length; i++) {
      var randomChar = allCharacters.charAt(
        Math.floor(Math.random() * allCharacters.length)
      );
      password += randomChar;
    }

    return password;
  }

  function writePassword() {
    var choices = getPasswordOptions();
    var password = generatePassword(choices);

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword);
});

