// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define variables to help organize 
var specialChar;
var numberAr;
var upperAr;
var lowerAr;


//user input variables:
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numberAr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperAr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerAr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(specialChar)
//create functions to write variables 
function writePassword() {

   //length of password
  user = prompt (" to begin please enter a number between 8 and 128.");
//character requirement 

  var passwordLength = prompt()
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password ")
  var upperCases = confirm("Do you want uppercases in your password")
  var special = confirm("Do you want special characters in your password?");
  var minimumCount = 0;



  return testAlert

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// arrays to hold characters that will make up random password
// Array of numbers user can use if wanting numbers 



generateBtn.addEventListener("click", writePassword);
