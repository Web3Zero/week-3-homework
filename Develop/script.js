// Assignment Code
// This is looking for an id of generate in the HTML and will return the first response. generate is the Generate Password Button.
// The # is the reference that makes it know we are looking for a class id. 
const generateBtn = document.querySelector("#generate");



//the function generatePassword will be used to select a series of randomised numbers, letters and characters to generate the password, ready for writePassord function to display the result on the webpage. 


function generatePassword(){

  //Ask user how long is the password


//ask if want to include:
//uppercase
//lowercase
//number
//special symbols

//generate password based on the criterias selected and the password length

//1. create the charset based on the criterias

//2. loop for the 'length' times, for each interation, 
//grab a random char and append to an accumulator



//bank of chars
//abcdeABCDE12345
//length: 6
//loop

//pw - - set of random characters

//return the password

}

// Write password to the #password input
function writePassword(event) {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// addEventListener to add interactivity to the button.
//When there is a click on generateBtn then we want to execute writePassword.
generateBtn.addEventListener("click", writePassword);



