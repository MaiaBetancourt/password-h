// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Name variables requested for password.
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!@#$%^&*()_+";
  var numeric = "0123456789";

  var options = {};
  
  //Ask the user for the length of the password.
  options.length = parseInt(prompt("How long would you like your password to be?"));

  if (options.length < 8 || options.length > 128 || isNaN(options.length)) {
    alert("Please choose 8 and 128 characters");
    return "Invalid Parameters";
  }

  //Ask the user if they want special characters, numeric characters, uppercase characters, and lowercase characters.
  options.lowercase = confirm("Would you like to use lowercase characters?");
  options.uppercase = confirm("Would you like to use uppercase characters?");
  options.special = confirm("Would you like to use special characters?");
  options.numeric = confirm("Would you like to use numeric characters?");

  //Build password depending on user's answers.
  
  var password = "";
  for (var i = 0; i < options.length; i++) {
    if (options.lowercase) {
      password += getRandomValue(lowercase);
    }

    if (options.uppercase) {
      password += getRandomValue(uppercase);
    }

    if (options.special) {
      password += getRandomValue(special);
    }
    
    if (options.numeric) {
      password += getRandomValue(numeric);
    }
  }
  
  return password.substring(0, options.length); 

}

function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function shuffle(str){

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
