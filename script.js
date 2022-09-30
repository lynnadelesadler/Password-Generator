// Array of lowercase characters to be included in password
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Function to prompt user for password selections
function getPasswordSelections() {
  // Variable to store length of password from user input
  var length = prompt('How many characters would you like your password to contain?');

  //If uer pressed Cancel, immediatley end function
  if (!length) {
    return;
  }

  // Conditional statement to check if password length is at least 8 and less than 129 characters long. If evaluates false prompts will end.
  if (length < 8) {
    alert('Length of password must be at least 8 characters');
    return;
  }
  else if (length > 128) {
    alert('Length of password must be less than 129 characters');
    return;
  }

  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowerCaseCharacters = confirm('Click OK to confirm including lowercase characters.');
  console.log(hasLowerCaseCharacters);

  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUpperCaseCharacters = confirm('Click OK to confirm including uppercase characters.');
  console.log(hasUpperCaseCharacters);

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm('Click OK to confirm including numeric characters.');
  console.log(hasNumericCharacters);

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm('Click OK to confirm including special characters.');
  console.log(hasSpecialCharacters);


  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false &&
    hasNumericCharacters === false &&
    hasSpecialCharacters === false


  ) {
    alert('Must select at least one character type');
    return;
  }

  // Object to store user input
  var passwordSelections = {
    length: length,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters

  };

  return passwordSelections;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

// Function to generate password with user input
function generatePassword() {
  var selections = getPasswordSelections();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var potentialCharacters = [];

  // Conditional statement based on user input that adds array of lowercase characters into array of potential characters 
  if (selections.hasLowerCaseCharacters) {
    potentialCharacters = potentialCharacters.concat(lowerCaseCharacters);
  }
  console.log(potentialCharacters);


  // Conditional statement based on user input that adds array of uppercase characters into array of potential characters
  if (selections.hasUpperCaseCharacters) {
    potentialCharacters = potentialCharacters.concat(upperCaseCharacters);
  }
  console.log(potentialCharacters);

  // Conditional statement based on user input that adds array of special characters into array of potential characters 
  if (selections.hasSpecialCharacters) {
    potentialCharacters = potentialCharacters.concat(specialCharacters);
  }
  console.log(potentialCharacters);

  // Conditional statement based on user input that adds array of numeric characters into array of potential characters
  if (selections.hasNumericCharacters) {
    potentialCharacters = potentialCharacters.concat(numericCharacters);
  }
  console.log(potentialCharacters);

  // For loop to iterate over the password length from the selections object, randomly selecting from the array of potential characters and concatenating those characters into the result variable
  for (var i = 0; i < selections.length; i++) {
    var potentialCharacter = getRandom(potentialCharacters);

    result.push(potentialCharacter);
    console.log(potentialCharacter);
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

