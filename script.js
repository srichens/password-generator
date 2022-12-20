// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
    
}

function generatePassword() {
  
  passPrompt();

 
  /*let passLength = prompt("How long would you like your password to be? Choose a number between 8 and 128");
  passLength = Number(passLength);*/

  function passPrompt() {
  let passLength = prompt("How long would you like your password to be? Choose a number between 8 and 128");
  passLength = Number(passLength);
  }

  /*let passLength = prompt("How long would you like your password to be? Choose a number between 8 and 128");
  passLength = Number(passLength);*/

  

  charPrompt();



  //if (passLength <= 7 || passLength >= 129 ) {prompt("Please choose a number between 8 and 128");} /*else if (passLength > 7 && passLength < 129) {charPrompt()};*/

  /*if (passLength < 8) {prompt("Please choose a number between 8 and 128");}

  else if (passLength > 129 ) {prompt("Please choose a number between 8 and 128");}*/

  //console.log(passLength);
  //if (passLength > 128) {wrongPassLength = prompt("Please choose a number between 8 and 128")};
  
  /*let speChar = confirm("Special characters? Press Ok for Yes or Cancel for No");
  let num = confirm("Include numbers? Press Ok for Yes or Cancel for No");
  let upper = confirm("Include uppercase? Press Ok for Yes or Cancel for No");
  let lower = confirm("Include lowercase? Press Ok for Yes or Cancel for No");*/
  
  function charPrompt() {
    let speChar = confirm("Special characters? Press Ok for Yes or Cancel for No");
    let num = confirm("Include numbers? Press Ok for Yes or Cancel for No");
    let upper = confirm("Include uppercase? Press Ok for Yes or Cancel for No");
    let lower = confirm("Include lowercase? Press Ok for Yes or Cancel for No");

  }

  const speCharValue = "$_!&%#@?<>";
  const numValue = "0123456789";
  const upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerValue = "abcdefghijklmnopqrstuvwxyz";

  
  
  speChar = speCharValue[Math.floor(Math.random() * speCharValue.length)];
  num = numValue[Math.floor(Math.random() * numValue.length)];
  upper = upperValue[Math.floor(Math.random() * upperValue.length)];
  lower = lowerValue[Math.floor(Math.random() * lowerValue.length)];

  /*for (let i = 0; i < passLength; i++) {}*/

  
  return speChar + num + upper + lower;
}

  /*let chosenSpeChar = speCharValue[Math.floor(Math.random() * speCharValue.length)];
  let chosenNum = numValue[Math.floor(Math.random() * numValue.length)];
  let chosenUpper = upperValue[Math.floor(Math.random() * upperValue.length)];
  let chosenLower = lowerValue[Math.floor(Math.random() * lowerValue.length)];

  return chosenSpeChar + chosenNum + chosenUpper + chosenLower*/
    
   

//console.log(generatePassword());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
