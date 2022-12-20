// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
    
}

function generatePassword() {
  let passLength = 0;
  passLength = Number(passLength);
  //check to see if number thing actually has to be here
  let speChar = 0;
  let num = 0;
  let upper = 0;
  let lower = 0;
  
  passPrompt();
 
  function passPrompt() {
    passLength = prompt("How long would you like your password to be? Choose a number between 8 and 128");
    passLength = Number(passLength);  
    while (passLength < 8 || passLength > 128 || isNaN(passLength)) {passLength = prompt("Please choose a number between 8 and 128");} 
  }
  
  charPrompt();
    
  function charPrompt() {
    speChar = confirm("Include special characters? Press Ok for Yes or Cancel for No");
    num = confirm("Include numbers? Press Ok for Yes or Cancel for No");
    upper = confirm("Include uppercase? Press Ok for Yes or Cancel for No");
    lower = confirm("Include lowercase? Press Ok for Yes or Cancel for No");
    while (speChar == false && num == false && upper == false && lower == false) {alert("You must chose at least one character choice"); charPrompt();} 
  }

  const speCharValue = "$_!&%#@?<>";
  const numValue = "0123456789";
  const upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerValue = "abcdefghijklmnopqrstuvwxyz";

  if (speChar) {speChar = speCharValue[Math.floor(Math.random() * speCharValue.length)];} else {speChar = "";};
  if (num) {num = numValue[Math.floor(Math.random() * numValue.length)];} else {num = "";};
  if (upper) {upper = upperValue[Math.floor(Math.random() * upperValue.length)];} else {upper = "";};
  if (lower) {lower = lowerValue[Math.floor(Math.random() * lowerValue.length)];} else {lower = "";};

    
  return speChar + num + upper + lower;
}
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
