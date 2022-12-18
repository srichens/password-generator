// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  let passLength = prompt("How long would you like your password to be? Choose a number between 8 and 128");
  let speChar = confirm("Special characters? Press Ok for Yes or Cancel for No");
  let num = confirm("Include numbers? Press Ok for Yes or Cancel for No");
  let upper = confirm("Include uppercase? Press Ok for Yes or Cancel for No");
  let lower = confirm("Include lowercase? Press Ok for Yes or Cancel for No");
  let chosenPassLength = Number(passLength);
  const speCharValue = "$_!&%#@?<>";
  const numValue = "0123456789";
  const upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerValue = "abcdefghijklmnopqrstuvwxyz";

  let chosenSpeChar = speCharValue[Math.floor(Math.random() * speCharValue.length)]
  let chosenNum = numValue[Math.floor(Math.random() * numValue.length)]
  let chosenUpper = upperValue[Math.floor(Math.random() * upperValue.length)]
  let chosenLower = lowerValue[Math.floor(Math.random() * lowerValue.length)]

  return chosenSpeChar + chosenNum + chosenUpper + chosenLower
    
   }

console.log(generatePassword());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
