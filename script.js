// Assignment Code
// This is looking for an id of generate in the HTML and will return the first response. generate is the Generate Password Button.
// The # is the reference that makes it know we are looking for a class id. 
const generateBtn = document.querySelector("#generate");



//the function generatePassword will be used to select a series of randomised numbers, letters and characters to generate the password, ready for writePassord function to display the result on the webpage. 


function generatePassword(){


  //Ask user how long is the password

  const length = Number(prompt("Enter Password Length (8 - 128 characters)"));

  console.log(length); 

//What if the user enters characters other than numbers?
if(isNaN(length)){
  alert("Please enter a number between 8 - 128.");
  return;
}

//We will stop people from entering numbers less than 8 or more than 128.
if (length < 8 || length > 128){
  alert("Enter a number between 1 - 128.");
  return;
}

//ask if want to include:
//uppercase
const includeUpperCase = confirm("Include UPPERCASE characters?");
//lowercase
const includeLowerCase = confirm("Include lowercase characters?");
//number
const includeNumbers = confirm("Include numbers in your password?");
//special symbols
const includeSpecChar = confirm("Include $pec!al char@cter$ in your password?");

//Ensure that the user accepts at least one of the above criteria

if(!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecChar){
  alert("Please choose at least one character option.");
  return;
}


//generate password based on the criterias selected and the password length

//1. create the charset based on the criteria
//first line is the charset starting with noting in it, until you add the options selected by the user
let charset = "";


if(includeUpperCase){
  charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if(includeLowerCase){
  charset = charset + "abcdefghijklmnopqrstuvwxyz";
}

if(includeNumbers){
  charset = charset + "0123456789";
}

if(includeSpecChar){
  charset = charset + "!@#$%^&*()_+<>";
}

//2. loop for the 'length' times, for each interation, 
//grab a random char and append to an accumulator

//we use let because we need to be able to update the declared value of password
//password starts blank and is then added to per the loop
let password = "";

//for = for loop = loop per the defined parameters in the brackets
//From the 3 defined parameters in the brackets:
//1. Initiates the loop at 0. We initially define ii as 0
//2. says to keep looping so long as we have looped less times than the length the user defined.
//3. ii++ will add 1 to ii after each loop, so that the loop will stop once ii is greater than the length of the password defined by the user. 

for (let ii=0; ii<length; ii++){
  const randomChar = charset[Math.floor(Math.random()*charset.length)]
  password = password +randomChar;
}

//Returns the password
return password;



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



