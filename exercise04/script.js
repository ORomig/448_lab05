//creates the variables 
var paragraph = document.getElementById("txt"); 
var width = document.getElementById("borderWidth"); 
var borR = document.getElementById("borderRed"); 
var borG = document.getElementById("borderGreen"); 
var borB = document.getElementById("borderBlue"); 
var backB = document.getElementById("groundBlue"); 
var backG = document.getElementById("groundGreen"); 
var backR = document.getElementById("groundRed"); 

//the update function that updates the background and border colors as well as the border width 
function update(){
    //checks to make sure input values are in range and not over 255
    //sends an alert if out of range
    if(width.value>255 || borR.value>255 || borG.value>255 || borB.value >255 || backB.value > 255 || backG.value > 255 || backR.value >255)
    {
        alert("A value is not in range try again");
    }
    //checks to make sure input values are not below 0
    //sends an alert if out of range
    else if(width.value<0 || borR.value<0 || borG.value<0 || borB.value < 0|| backB.value <0 || backG.value <0 || backR.value <0)
    {
        alert("A value is not in range try again");
    }
    //if values are in range it updates the text
    else{
        paragraph.style.backgroundColor = "rgb("+backR.value+","+backG.value+","+backB.value+")"; 
        paragraph.style.borderWidth = width.value +"px";
        paragraph.style.borderColor = "rgb("+borR.value+","+borG.value+","+borB.value+")";
    }
   
}