// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var returnvalue;

var promptbefore = "will the password use ";

  var useLower = window.confirm(promptbefore + "lower case letters [lower]?");
  console.log({useLower});
  var useUpper = window.confirm(promptbefore + "upper case letters [UPPER]?");
  console.log({useUpper});
  var useNumeric = window.confirm(promptbefore + "numbers? [1,4,7]");
  console.log({useNumeric});
  var useSpecial = window.confirm(promptbefore + "special characters [# * &]");
  console.log({useSpecial});


  if(!(useLower || useUpper || useNumeric || useSpecial))
  {
    // if ever one of these are false then the user did not select any parameters
    window.alert("At least one catagory must be selected");
    return;
  }
  
var lengthprompt = "How long should the password be? Press cancel to exit"
var lengthreprompt = "The password must be between 8 and 128 characters long. "

var passLength = getLength(lengthprompt);
console.log("Output =>> " + passLength?.toString() ?? "length is null");

if(passLength === null) {
  console.log("exiting program");
  return;
}

lengthreprompt = lengthreprompt +  lengthprompt;

while( passLength < 8 || passLength > 128 || isNaN(passLength))
{
  if(isNaN(passLength))
  {
      passLength = getLength("Please enter a number between 8 and 128.")
  }
  else
  {
    passLength = getLength(lengthreprompt);
  }
    console.log("Output =>> " + passLength?.toString() ?? "length is null");

    if(passLength === null) {
      console.log("exiting program");
      return;
    }
}

passLength = Number(passLength);
console.log("creating a password with " + passLength.toString() + " characters");
returnvalue = createPassword(useLower, useUpper, useNumeric, useSpecial, passLength);
console.log("created password => " + returnvalue);
  // console.log(useLower);
  // window.alert;
  // window.confirm;
  // window.prompt;

  return returnvalue;
}

function getLength( prompt)
{
  return window.prompt(prompt);
}


function createPassword(lower, upper, numeric, special, length)
{
  console.log("creating a password with \n lower case: " + lower + "\nupper case: " + upper + 
  "\nnumbers: " + numeric + "\nspecial characters: " + special);


  var lowercase = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var uppercase = [];
  lowercase.forEach(element => { uppercase.push(element.toUpperCase());});
  var numbers = [];
  for(let a = 0; a < 10; ++a) { numbers.push(a);}


  var specialchars = [' ', '!', '"', '#', '$', '%', '&', `'`, '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
  
var charPool = [];

//the concat method returns an array without modifying the
//existing arrays
if(lower === true) {
  charPool = charPool.concat(lowercase);
   console.log("adding lower case letters")
}
if(upper === true)  {
  charPool = charPool.concat(uppercase);
   console.log("adding upper case letters");
}
if(numeric) {
   charPool = charPool.concat(numbers); 
   console.log("adding numbers");
}
if(special)  {
  charPool = charPool.concat(specialchars); 
  console.log("adding special characters");
}

  //booleans to determine if the password has the specified character
  var haslower = false; 
  var hasUpper = false;
  var hasNumeric = false;
  var hasSpecial = false;

  let password = "";
  let addedChar = "";
  var randNum;
for(let j = 0; j < length; ++j)
{
  console.log("running iteration " + j + "/" + length);
  addedChar = charPool[getRand(charPool.length)];
  console.log("Adding a character to the password : " + addedChar);
  password += addedChar;
}


  

/*
  var randNum = getRand(4);

  for(let i = 0; i < length; ++i)
  {
    console.log("running iteration " + i + "/" + length);
      switch (randNum){
        case 0:
          if(!(lower===true)) 
          {
            console.log("lower case is not allowed");
            i--;
            break;
          }
          addedChar =  lower[getRand(lower.length)];
          console.log(randNum + " adding a lower case letter: " + addedChar);
          password += addedChar;
          break;
        case 1:
          if(!(upper===true))
          {
            console.log("upper case is not allowed");
            i--;
            break;
          }
          addedChar = lower[getRand(lower.length)].toUpperCase();
          console.log(randNum + " adding an Upper case letter: " + addedChar);
          password += addedChar;
          break;
        case 2:
          if(!(numeric===true))
          {
            console.log("numbers are not allowed");
            i--;
            break;
          }
          addedChar = getRand(10).toString();
          console.log(randNum + " adding a number: " + addedChar);
          password += addedChar;
          break;
        default:
          if(!(special===true))
          {
            console.log("special characters are not allowed");
            i--;
            break;
          }
          addedChar = special[getRand(lower.length)];
          password += addedChar;
          console.log(randNum + " adding a special character: " + addedChar);
          break;

      }
      var randNum = getRand(4);
    }
    */
    return password;
}
    
function getRand(max)
{
  return Math.floor(Math.random() * max );
}


