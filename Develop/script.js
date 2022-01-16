// Assignment code here

// Global variables 
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '1234567890';
var special = '!@#$%^&*()';
var setPassword = "";
var randomLower = "";
var randomUpper = "";
var randomNumeric = "";
var randomSpecial = "";


// GENERATE PASSWORD FUNCTION 
function generatePassword() {
  // Enter number of characters 
 var length = window.prompt("What is the length of your password? It must be between 8 and 128 characters.");

//  // If user enters too low or high of a number, return them to the beginning 
//   if (length < 8 || length > 128) {
//     window.alert("You must enter a valid number. Please try again!");
//     return generatePassword();
//   }

// // Confirm user number input 
// var finalNum = length.value;   

 // Confirm options 
 var isLower = window.confirm("Would you like to include lowercase letters?");
 var isUpper = window.confirm("Would you like to include uppercase letters?");
 var isNumeric = window.confirm("Would you like to include numbers?");
 var isSpecial = window.confirm("Would you like to include special characters?");

 // for loop, covering all options 
 for (var index = 0; index < length; index++) {
  randomLower += lower.charAt(Math.floor(Math.random() * lower.length));
  randomUpper += upper.charAt(Math.floor(Math.random() * upper.length));
  randomNumeric += numeric.charAt(Math.floor(Math.random() * numeric.length));
  randomSpecial += special.charAt(Math.floor(Math.random() * special.length));
 }

 // User chooses correct amount of characters
if (length >= 8 && length <= 128) {
    // if user chooses no options...
    if (isLower === false && isUpper === false && isNumeric === false && isSpecial === false) {
      return generatePassword();
    }

    // if user chooses all options...
    if (isLower === true && isUpper === true && isNumeric === true && isSpecial === true) {
       setPassword += randomLower + randomUpper + randomNumeric + randomSpecial;
       console.log(setPassword);
      }

    // if user chooses uppercase, numbers, and special characters...
    if (isLower === false && isUpper === true && isNumeric === true && isSpecial === true) {
      setPassword += randomUpper + randomNumeric + randomSpecial;
    } 
    // lowercase only
    else {
      setPassword += randomLower;
      console.log(setPassword);
    }

    // if user chooses numbers and special characters...
    if (isLower === false && isUpper === false && isNumeric === true && isSpecial === true) {
      setPassword += randomNumeric + randomSpecial;
    }
    // lowercase and uppercase only 
    else {
      setPassword += randomLower + randomUpper;
    }

    // if user chooses only special characters 
    if (isLower === false && isUpper === false && isNumeric === false && isSpecial === true) {
    setPassword += randomSpecial;
    }
    // lowercase, uppercase, and numbers only 
    else {
      setPassword += randomLower + randomUpper + randomNumeric;
    }

    // uppercase only 
    if (isLower === false && isUpper === true && isNumeric === false && isSpecial === false) {
      setPassword += randomUpper;
    }
    // lowercase, number, and special
    else {
      setPassword += randomLower + randomNumeric + randomSpecial;
    }

    // number only 
    if (isLower === false && isUpper === false && isNumeric == true && isSpecial == false) {
      setPassword += randomNumeric;
    }
    // lowercase, uppercase, and special
    else {
      setPassword += randomLower + randomUpper + randomSpecial;
    }

    // uppercase and special 
    if (isLower === false && isUpper === true && isNumeric === false & isSpecial === true) {
      setPassword += randomUpper + randomSpecial;
    }
    // lowercase and number 
    else {
      setPassword += randomLower + randomNumeric;
    }

    // uppercase and number 
    if (isLower === false && isUpper === true && isNumeric === true && isSpecial === false) {
      setPassword += randomUpper + randomNumeric;
    }
    // lowercase and special
    else {
      setPassword += randomLower + randomSpecial;
    }
  }
};
// END GENERATE PASSWORD FUNCTION 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

