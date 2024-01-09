var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to generate password with user input with characters arrays concatenated to remove commas.
function generatePassword(choices) {
  var allCharacters = "";
  if (choices.includeLowercase) {
    allCharacters += lowerCasedCharacters.join("");
  }
  if (choices.includeUppercase) {
    allCharacters += upperCasedCharacters.join("");
  }
  if (choices.includeNumeric) {
    allCharacters += numericCharacters.join("");
  }
  if (choices.includeSpecial) {
    allCharacters += specialCharacters.join("");
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

// Code for writing password to the #password input
function writePassword() {
  var choices = getPasswordChoices();
  var password = generatePassword(choices);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Code for adding event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Code to prompt user to type the desired length of their password.
function getPasswordChoices() {
  var length = prompt("Enter the password length (between 8 and 128 characters):");

  while (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid password length between 8 and 128.");
    length = prompt("Enter the password length (between 8 and 128 characters):");
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  return {
    length: parseInt(length),
    includeLowercase,
    includeUppercase,
    includeNumeric,
    includeSpecial,
  };
}


