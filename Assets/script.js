// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// password criteria // 
function generatePassword() {

  var allCharacters = [];

  var lowercaseLets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseLets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '?'];
  var numbersOn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


  // prompts for passwords // user input
  let passLength = window.prompt("What sort of password would you like to set up? Please pick a length between 8-128. (-:");

  // else ifs of password
  if (passLength >= 8 && passLength <= 128) {
    
  var useLowercase = confirm("Would you like some lowercase letters?");
  var useUppercase = confirm("How about uppercase?");
  var useSpecial = confirm("Almost done -- would you like some special characters added?");
  var useNumbers = confirm("And finally, how about some numbers?");
    
    
    window.alert("Great! Let's continue.");


    if (useLowercase === true) {
      allCharacters.push(lowercaseLets);
      console.log(allCharacters);
    }

    if (useUppercase === true) {
      allCharacters.push(uppercaseLets);
    }

    if (useSpecial == true) {
      allCharacters.push(specialCharacters);
    }

    if (useNumbers === true) {
      allCharacters.push(numbersOn);
    }

    if (allCharacters.length ==0){
      window.alert("Please select at least one character. (-:")
      return;
    }


  } else if (passLength < 8 || passLength > 128) {
    window.alert("I'm sorry, the numbers must be an integer between 8 and 128. Please try again.");
    return;
  }

  console.log(allCharacters);

  var password = ""

  allCharacters= allCharacters.flat(); //when pushing, creates arrays of arrays -- flats compresses into one normal array

  for (let i = 0; i < passLength; i++) {
    password += allCharacters[(Math.floor(Math.random() * allCharacters.length))];

  }

  return (password);
}

  // Add event listener to generate button
