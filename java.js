// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  const promptChoice_1 = prompt("Would you like special characters in new password")
 const promptChoice_2 = prompt("Would you like at least 8 characters in password")
 const promptChoice_3 = prompt("Would you like uppercase in password")
 function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
 }
  
if (promptChoice_2 === "yes") {
    var leng = getRandomIntInclusive(8,16);
    console.log(leng)
    }
    else{
        var leng = getRandomIntInclusive(5,7);
        console.log(leng)
    }   

var passWordGen = {
    letters : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    specialChar : ["!","@","#","$","%","%","^","&","*","(",")","-","+","?","/",">","<","[","]",":",";","|"],
    capletter: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
}
var newPassword_2 =[] ;
var newItem = [];
    for(i=0; i< leng; i++){
        if (promptChoice_1 === "yes" ){
        var item = passWordGen.specialChar[Math.floor(Math.random() * Object.keys(passWordGen.specialChar).length)]
        }
        if (promptChoice_3 === "yes" ){
            var item_3 = passWordGen.capletter[Math.floor(Math.random() * Object.keys(passWordGen.capletter).length)]
            }
        var item_2 = passWordGen.letters[Math.floor(Math.random() * Object.keys(passWordGen.letters).length)]
     if(promptChoice_3 ==="yes"){
            newItem += item_3
        }
        if(promptChoice_1==="yes"){
            newItem +=item
        }
        newItem += item_2

        if(newPassword_2.indexOf(newItem[i])=== -1){   
            newPassword_2.push(newItem)
        }   
    }
    var specialChar_2 = newPassword_2.toString();
    newStringChar = specialChar_2.replace(/,/g,"");
     newStringChar = (newStringChar.slice(newStringChar.length -leng))
  return newStringChar
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);