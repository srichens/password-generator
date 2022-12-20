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
  let speChar = 0;
  let num = 0;
  let upper = 0;
  let lower = 0;

  /*let passLength = passPrompt();
  passPrompt();*/
  
  passPrompt();
 
  /*let passLength = prompt("How long would you like your password to be? Choose a number between 8 and 128");
  passLength = Number(passLength);*/

  function passPrompt() {
  passLength = prompt("How long would you like your password to be? Choose a number between 8 and 128");
  passLength = Number(passLength);  
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {passLength = prompt("Please choose a number between 8 and 128");} 
  }
  
  console.log(typeof passLength);
  

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
  let lower = confirm("Include lowercase? Press Ok for Yes or Cancel for No");

  let charArray = [speChar, num, upper, lower];

  if (charArray = [false, false, false, false]) {alert("You must chose at least one character choice");};

  console.log (charArray);*/
  
  function charPrompt() {
    speChar = confirm("Special characters? Press Ok for Yes or Cancel for No");
    num = confirm("Include numbers? Press Ok for Yes or Cancel for No");
    upper = confirm("Include uppercase? Press Ok for Yes or Cancel for No");
    lower = confirm("Include lowercase? Press Ok for Yes or Cancel for No");

    let charArray = [speChar, num, upper, lower];

  if (speChar == false && num == false && upper == false && lower == false) {alert("You must chose at least one character choice"); charPrompt();} else {console.log(charArray);};

  console.log (charArray);

  }

  const speCharValue = "$_!&%#@?<>";
  const numValue = "0123456789";
  const upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerValue = "abcdefghijklmnopqrstuvwxyz";

  if (speChar) {speChar = speCharValue[Math.floor(Math.random() * speCharValue.length)];} else {speChar = "";};
  if (num) {num = numValue[Math.floor(Math.random() * numValue.length)];} else {num = "";};
  if (upper) {upper = upperValue[Math.floor(Math.random() * upperValue.length)];} else {upper = "";};
  if (lower) {lower = lowerValue[Math.floor(Math.random() * lowerValue.length)];} else {lower = "";};

  
  
  /*speChar = speCharValue[Math.floor(Math.random() * speCharValue.length)];
  num = numValue[Math.floor(Math.random() * numValue.length)];
  upper = upperValue[Math.floor(Math.random() * upperValue.length)];
  lower = lowerValue[Math.floor(Math.random() * lowerValue.length)];*/

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
