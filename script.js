//Function to generate randon numbers

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

//Generate password function

function generatePassword () {
  
  
  var characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "123456789",
    specialChar: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }

  //variable for the selected characters
  
  var charOnPass = []
  
  //Variables
  var passwordLengthOptions = "";
  var lowercaseOption = "";
  var uppercaseOption = "";
  var numericOption = "";
  var specialCharOption = "";
  
  // Prompt for the lenght of the password
  
  passwordLengthOptions = window.prompt("How many characters do you want the password to have? (Type a number)")

  // Prompts for character types
  
  lowercaseOption = window.prompt("Do you want to include lowercase letters? Type 'y' to (yes) or 'n' to (no) y/n")
  uppercaseOption = window.prompt("Do you want to include uppercase letters? Type 'y' to (yes) or 'n' to (no) y/n")
  numericOption = window.prompt("Do you want to include numerical values? Type 'y' to (yes) or 'n' to (no) y/n")
  specialCharOption = window.prompt("Do you want to include special character? Type 'y' to (yes) or 'n' to (no) y/n")


  // How many character will the pasword have
  var passwordLength = parseInt(passwordLengthOptions) 

  // Selected characters types
  if (lowercaseOption === "y") {
    charOnPass.push(characters.lowercase)
  }
  if (uppercaseOption === "y") {
    charOnPass.push(characters.uppercase)
  }
  if (numericOption === "y") {
    charOnPass.push(characters.numbers)
  }
  if (specialCharOption === "y") {
    charOnPass.push(characters.specialChar)
  }

  password = ""
  while (password.length != passwordLength) {
    //random index on char on pass
    charOnPassIndex = randomNumber(0,charOnPass.length-1)
    //random index on charOnPass item
    let value = charOnPass[charOnPassIndex][randomNumber(0,charOnPass[charOnPassIndex].length - 1)];
    password += value;
  }
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
