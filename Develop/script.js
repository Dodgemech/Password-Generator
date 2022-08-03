// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// User prompts when creating a password

function createPassword() {
  var password = "";
  var length = Number(prompt("How many characters would you like you password to be?"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Password must be between 8 through 128 characters in length. How many characters would you like?"));

  var uppercase = confirm("Would you like to use uppercase letters?");
  var lowercase = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?")
  var symbols = confirm("Would you like to use symbols?")

  while (!uppercase && !lowercase && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppercase = confirm("Would you like to use uppercase letters?");
    lowercase = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use symbols?");
  }

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
