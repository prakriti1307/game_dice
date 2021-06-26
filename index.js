var Randomnumber1=Math.floor(Math.random()*6)+1;
var RandomDiceImage="dice" + Randomnumber1 + ".png"; 
// dice-1.png --dice-2.png
var RandomImageSource="images/" + RandomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",RandomImageSource);


var Randomnumber2=Math.floor(Math.random()*6)+1;
// dice-1.png --dice-2.png
var RandomImageSource2="images/dice" + Randomnumber2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",RandomImageSource2);

if(Randomnumber1 > Randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(Randomnumber2 > Randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}