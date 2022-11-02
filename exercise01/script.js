//create the variables for the password fields
//create the variables for the error/valid messages
var password = document.getElementById("pass1");
var reEnter = document.getElementById("pass2");
var popupMatch = document.getElementById("noMatch");
var popupEight = document.getElementById("noEight");
var popupGood = document.getElementById("passGood");

//the onclick validate function that checks the validity of the password
function validateFunc(){
  popupEight.style.display = "none"; //on each click the messages reset
  passGood.style.display="none";
  popupMatch.style.display = "none";
  //checks that the passwords match 
  if(password.value.match(reEnter.value)){
    if(password.value.length <8){ //checks if password less than 8 characters
      popupEight.style.display = "block";
      alert("Password must be 8 characters long!"); //error message for 8 characters
    }
    else{
      passGood.style.display="block";//if passwords match and are at least 8 characters it's good to go
    }
  }
  else{
    popupMatch.style.display = "block"; //the passwords do not match 
    alert("Passwords do not match! Try again!");
  }
}
