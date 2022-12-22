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
    if (speChar) {alert("Your password will include special characters")} else {alert( "Your password will NOT include special characters")};
    num = confirm("Include numbers? Press Ok for Yes or Cancel for No");
    if (num) {alert("Your password will include numbers")} else {alert( "Your password will NOT include numbers")};
    upper = confirm("Include uppercase letters? Press Ok for Yes or Cancel for No");
    if (upper) {alert("Your password will include uppercase letters")} else {alert( "Your password will NOT include uppercase letters")};
    lower = confirm("Include lowercase letters? Press Ok for Yes or Cancel for No");
    if (lower) {alert("Your password will include lowercase letters")} else {alert( "Your password will NOT include lowercase letters")};
    while (speChar == false && num == false && upper == false && lower == false) {alert("You must chose at least one character choice"); charPrompt();} 
  }
  
  var speCharValue = ["!", "#", "$", "%", "&", "*", "_", "-", "^", "@"];
  var numValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  if (speChar) {speChar = speCharValue[Math.floor(Math.random() * speCharValue.length)];} else {speChar = "";};
  if (num) {num = numValue[Math.floor(Math.random() * numValue.length)];} else {num = "";};
  if (upper) {upper = upperValue[Math.floor(Math.random() * upperValue.length)];} else {upper = "";};
  if (lower) {lower = lowerValue[Math.floor(Math.random() * lowerValue.length)];} else {lower = "";};
  
  let chosenValues = [ speChar, num, upper, lower];

  console.log(chosenValues);

  /*if (speChar && num && upper && lower) {chosenChar = speCharValue += numValue += upperValue += lowerValue} else {console.log("no password");}

  var chosenPassword = "";

  for (var i = 0; i < passLength; i++) {
    var chosenPassword = chosenChar[Math.floor(Math.random() * chosenChar.length)]
  };

  console.log(chosenPassword);*/

  //original code-----

  /*const speCharValue = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  const numValue = "0123456789";
  const upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerValue = "abcdefghijklmnopqrstuvwxyz";

  if (speChar) {speChar = speCharValue[Math.floor(Math.random() * speCharValue.length)];} else {speChar = "";};
  if (num) {num = numValue[Math.floor(Math.random() * numValue.length)];} else {num = "";};
  if (upper) {upper = upperValue[Math.floor(Math.random() * upperValue.length)];} else {upper = "";};
  if (lower) {lower = lowerValue[Math.floor(Math.random() * lowerValue.length)];} else {lower = "";};
  
  let chosenValues = [ speChar, num, upper, lower];

  console.log(chosenValues);*/

//-----original code
   
    
  
}
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
