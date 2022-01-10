//Function to generate randon numbers

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

//Generate password function

function generatePassword () {
  
  
  const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "123456789",
    specialChar: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    // special character (") not inclued issue 1 **************************
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
  
  window.alert("How many characters do you want the password to have?")
  passwordLengthOptions = window.prompt("Type: 1 to (at lest 3 and no more than 8) ||| Type: 2 to (at least 8 and no more than 128)")

  // Prompts for character types
  
  lowercaseOption = window.prompt("Do you want to include lowercase letters? y/n")
  uppercaseOption = window.prompt("Do you want to include uppercase letters? y/n")
  numericOption = window.prompt("Do you want to include numerical values? y/n")
  specialCharOption = window.prompt("Do you want to include special character? y/n")

  // *******************I hv t d while loop until correct answer prompt issue 2

  // How many character will the pasword have
  var passwordLength = 0 
  if (passwordLengthOptions === "1") {
    passwordLength = randomNumber(3,8);
  } else if (passwordLengthOptions === "2") {
    passwordLength = randomNumber(8,128);
  }

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
