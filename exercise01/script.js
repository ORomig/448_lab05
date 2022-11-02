var password = document.getElementById("pass1");
var reEnter = document.getElementById("pass2");
var popupMatch = document.getElementById("noMatch");
var popupEight = document.getElementById("noEight");
var popupGood = document.getElementById("passGood");

function validateFunc(){
  popupEight.style.display = "none";
  passGood.style.display="none";
  popupMatch.style.display = "none";
  if(password.value.match(reEnter.value)){
    if(password.value.length <8){
      popupEight.style.display = "block";
      alert("Password must be 8 characters long!");
    }
    else{
      passGood.style.display="block";
    }
  }
  else{
    popupMatch.style.display = "block";
    alert("Passwords do not match! Try again!");
  }
}
