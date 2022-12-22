// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
    
}
//------------------my added code below: wrote function generatePassword() that is called above----------------

function generatePassword() {
  
  // password prompt that requires certain length (*fullfills acceptance criteria*)
  let passLength = prompt("How long would you like your password to be? Choose a number between 8 and 128");
  passLength = Number(passLength);  
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {passLength = prompt("Please choose a number between 8 and 128");} 

  // initialize character choice variables so they are available outside of charPrompt()
  let speChar = 0;
  let num = 0;
  let upper = 0;
  let lower = 0;
   
  // charPrompt() includes prompts to choose characters types, confirm choices, and require choosing at least one type (*fulfills acceptance criteria*)
  // put prompts in one big prompt to circle back to the beginning if at least one character type isn't chosen
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
  
  // set value of character choices; originally had them each as a big string, but changed to an array to do length comparisons and filter out empty values
  let speCharValue = ["!", "#", "$", "%", "&", "*", "_", "-", "^", "@"]; 
  let numValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
  let upperValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
  let lowerValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

  /*create random characters based on choices from character type prompts - this is where I was stuck for several hours, because I couldn't figure out 
  a for loop to generate characters based on choices that were also the right password length. I finally gave up and left this as is. */
  if (speChar) {speChar = speCharValue[Math.floor(Math.random() * speCharValue.length)];} else {speChar = "";};
  if (num) {num = numValue[Math.floor(Math.random() * numValue.length)];} else {num = "";};
  if (upper) {upper = upperValue[Math.floor(Math.random() * upperValue.length)];} else {upper = "";};
  if (lower) {lower = lowerValue[Math.floor(Math.random() * lowerValue.length)];} else {lower = "";};
   
  /*charAdds is my janky workaround for getting the correct password length. If else doesn't allow me to accurately return values for combos
  that have more than two character types, but I put together all the possible double combos. It still technically produces a correct password output.*/
  let charAdds = "";

  if (speChar && num) {charAdds = "!#$%&*_-^@0123456789"}
  else if (speChar && upper) {charAdds = "!#$%&*_-^@ABCDEFGHIJKLMNOPQRSTUVWXYZ"} 
  else if (speChar && lower) {charAdds = "!#$%&*_-^@abcdefghijklmnopqrstuvwxyz"}
  else if (num && upper) {charAdds = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
  else if (num && lower) {charAdds = "0123456789abcdefghijklmnopqrstuvwxyz"}
  else if (upper && lower) {charAdds = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"}
  else if (speChar) {charAdds = "!#$%&*_-^@"} 
  else if (num) {charAdds = "0123456789"}
  else if (upper) {charAdds = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
  else {charAdds = "abcdefghijklmnopqrstuvwxyz"};

  /*setting chosenValues as a string and then adding .toString allows me to filter out the "" from the false character choices but then puts them 
  back in an array for length comparisons*/ 
  let chosenValues  = [speChar + num + upper + lower];

  chosenValues = chosenValues.toString();

  console.log(passLength);
  console.log(chosenValues.length);

  let charAddsLength = passLength - chosenValues.length;

  console.log(charAddsLength);
    
  //add specified charAdds to get right password length
  let charAddsPass = "";

  for (var i = 0; i < charAddsLength; i++)
  {var randomNumber = Math.floor(Math.random() * charAdds.length); charAddsPass += charAdds.substring(randomNumber, randomNumber +1);}

  let newPassword = chosenValues + charAddsPass;

  return newPassword;  
  
}
 //--------------my added code above-------------------------

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
