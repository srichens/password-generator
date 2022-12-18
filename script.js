// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() ; 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passLength = prompt("How long? Between 8 and 128");
  var charSet = confirm("Special characters? Press Ok for Yes or Cancel for No");
  var num = confirm("Include numbers? Press Ok for Yes or Cancel for No");
  var upper = confirm("Include uppercase? Press Ok for Yes or Cancel for No");
  var lower = confirm("Include lowercase? Press Ok for Yes or Cancel for No");
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
