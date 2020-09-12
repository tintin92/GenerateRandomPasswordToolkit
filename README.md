# Password-Generator

//Going to press Generate Password button 
Page will prompt user "How many characters would you like in your password to contain?

click ok to confirm inlcuding special characters  OK
Click okay to confirm numbers 
Click okay to include lowercase
click okay to include uppercase 

user inputs 2 
alert Password length must be at least 8 characters 

if, else-if, or else (keyword), a condition, and the resulting code in { } curly brackets 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);