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
    if (speChar) {alert("Your password will include special characters")} 
      else {alert( "Your password will NOT include special characters")};
    num = confirm("Include numbers? Press Ok for Yes or Cancel for No");
    if (speChar) {alert("Your password will include numbers")} 
      else {alert( "Your password will NOT include numbers")};
    upper = confirm("Include uppercase letters? Press Ok for Yes or Cancel for No");
    if (speChar) {alert("Your password will include uppercase letters")} 
      else {alert( "Your password will NOT include uppercase letters")};
    lower = confirm("Include lowercase letters? Press Ok for Yes or Cancel for No");
    if (speChar) {alert("Your password will include lowercase letters")} 
      else {alert( "Your password will NOT include lowercase letters")};
    while (speChar == false && num == false && upper == false && lower == false) {alert("You must chose at least one character choice"); charPrompt();} 
  }
  
  /*if (speChar) {speCharVal = "!#$%&()*+,-./:;<=>?@[]^_`{|}~"} else {speCharVal = "";};
  if (num) {numVal = "0123456789"} else {numVal = "";};
  if (upper) {upperVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"} else {upperVal = "";};
  if (lower) {lowerVal = "abcdefghijklmnopqrstuvwxyz"} else {lowerVal = "";};

  console.log(speCharVal);
  console.log(numVal);
  console.log(upperVal); 
  console.log(lowerVal);

  let charValues = [speCharVal + numVal + upperVal + lowerVal]*/

  //console.log(charValues);

  //return charValues;

  /*let chosenPassword = "";

  for (var i = 0; i < passLength; i++) {chosenPassword = charValues[Math.floor(Math.random() * charValues.length)];};

  return chosenPassword;*/

  /*let charValues = {
    speCharValue: "$_!&%#@?<>",
    numValue: "0123456789",
    upperValue: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerValue: "abcdefghijklmnopqrstuvwxyz",
  };
  
  let chosenPassword = "";

  for (var i = 0; i <passLength; i++) {chosenPassword += charValues.charAt(Math.floor(Math.random() * charValues.length));}

  return chosenPassword;*/
  const speCharValue = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  const numValue = "0123456789";
  const upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerValue = "abcdefghijklmnopqrstuvwxyz";
    
  if (speChar) {speChar = speCharValue[Math.floor(Math.random() * speCharValue.length)];} else {speChar = "";};
  if (num) {num = numValue[Math.floor(Math.random() * numValue.length)];} else {num = "";};
  if (upper) {upper = upperValue[Math.floor(Math.random() * upperValue.length)];} else {upper = "";};
  if (lower) {lower = lowerValue[Math.floor(Math.random() * lowerValue.length)];} else {lower = "";};
  
  let chosenValues = [ speChar + num + upper + lower];

  console.log (chosenValues);

//console.log (password)


  //return chosenValues;

 
  
  //console.log(addValues);

  //console.log(chosenValues);
 
  //console.log(chosenValues.length);

  //let chosenPassword = chosenValues.toString();

 //return chosenPassword;
        
  
  /*let chosenPassword = [speChar + num + upper + lower];
  
  console.log(chosenPassword);
 
  console.log(chosenPassword.length);*/
  
  
  //if (chosenPassword.length < passLength) {newPass = chosenPassword.push[0]};

  //let newPass = chosenPassword.push[0];

  //console.log(newPass);


 

  /*if (speChar) {speChar = speCharValue[Math.floor(Math.random() * speCharValue.length)];} else {speChar = "";};
  if (num) {num = numValue[Math.floor(Math.random() * numValue.length)];} else {num = "";};
  if (upper) {upper = upperValue[Math.floor(Math.random() * upperValue.length)];} else {upper = "";};
  if (lower) {lower = lowerValue[Math.floor(Math.random() * lowerValue.length)];} else {lower = "";};

  let chosenPassword = [speChar, num, upper, lower];

  console.log(chosenPassword);
  console.log(chosenPassword.length); */

  /*createPass();

  function createPass() {
    let newPass = '';
    let passLength = chosenPassword.length;
    for ( let i=0; i < length; i++) {result += chosenPassword.charAt(Math.)}
  }
 console.log(newPass);*/
  /*let chosenPassword = [speChar, num, upper, lower];

  console.log(chosenPassword);
  console.log(chosenPassword.length);*/

  /*createPass();

  function createPass(){
    let i = chosenPassword.length;
    console.log(i);
    for (let i = 0; i < chosenPassword.length; i++); 
    console.log(chosenPassword[i]);
    //newPassword = chosenPassword[Math.floor(Math.random() * passLength)];
  }*/
  //console.log(passLength);


    
  //return speChar + num + upper + lower;
}
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
