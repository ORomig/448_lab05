//goes to previous picture
const images =["cyclamen.webp", "tree.jpg", "orchid.jpeg", "pinkBlueFlowers.webp", "blueFlower.jpeg", "cherry.jpeg"];
var counter =0;
function prev(){
    if(counter<6 && counter>0){
        document.getElementById("picture").src =images[counter-1];
        counter=counter-1;//changes counters actual value to match the array value
    }
    else{
        counter=5;
        document.getElementById("picture").src =images[counter];
    }
}

//goes to next picture
function next(){
    if(counter<5){
        if(counter>=0){
            document.getElementById("picture").src =images[counter+1];
            counter+=1; //changes counters actual value to match the array value 
        }
    }
    else{
        counter=0;
        document.getElementById("picture").src =images[counter];
    }
}