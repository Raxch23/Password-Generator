// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passLength = parseInt(window.prompt("please enter your desired password length"));
  console.log(passLength)
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("The password must be at least 8 characters long and 128 characters max.")
    return;
  }
  var yeslowerCase = confirm("would you like lowercase letters?")
  var charactersArray = []
  if (yeslowerCase) {
    charactersArray = charactersArray.concat(lowerCasedCharacters)
  }
  if (confirm("would you like uppercase letters?")) {
    charactersArray = charactersArray.concat(upperCasedCharacters)
  }
  if (confirm("would you like numbers?")) {
    charactersArray = charactersArray.concat(numericCharacters)
  }
  if (confirm("would you like special characters?")) {
    charactersArray = charactersArray.concat(specialCharacters)
  }
  if (charactersArray.length === 0) {
    alert("You must select at least one character type")
    return;
  }
  // getRandom(charactersArray,passLength)
  return {charactersArray,passLength}
}

// Function for getting a random element from an array
function getRandom(arr,length) {
  var password=""
for(var i=0;i<length;i++){
  var index=Math.floor(Math.random()*arr.length)
  var digit=arr[index]
password+=digit
}
console.log(password)
return password;
}

// Function to generate password with user input
function generatePassword() {
  //var generatePassword=getPasswordOptions()
var options=getPasswordOptions()
return getRandom(options.charactersArray,options.passLength)
 // return generatePassword
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
const password = generatePassword();
  //console.log(password)
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);