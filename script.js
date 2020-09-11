// Assignment Code
                      //selecting document from the dom 
var generateBtn = document.querySelector("#generate");
// Special Characters for the function created 
const specialCharacters = "!@#$%^&*()";


  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Prompts that come up after you click generate password//
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for your new password. It must be at least 8 characters and no more than 128.");
    while (passwordLength < 7 || passwordLength < 128) {
      alert("Sorry, the password length be between 8 and 128 characters.");
      //re-issue Alert to insert correct character length for password
      var passwordLength = prompt("Please enter the number of characters you want for your new password. It must be at least 8 characters and no more than 128.");
    }
    if (passwordLength > 7 || passwordLength < 129) {


  var passwordLength = prompt ()
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm ("Do you want lowercases in your password ")
  var upperCases = confirm ("Do you want uppercases in your password")
  var special = confirm("Do you want special characters in your password?");
  var minimumCount = 0;
}

// for (let j = 9 j <== 128; j++) {
//   console.log(j);
}
