var d1 = Math.random();
d1=Math.floor((d1*6)+1);
diceImage(d1,1);

var d2 = Math.random();
d2=Math.floor((d2*6)+1);
diceImage(d2,2);

function diceImage(d,numberOfDice){
    var diceImg = "dice" + d + ".png";
    document.querySelector(".img" + numberOfDice).setAttribute("src","./images/" + diceImg);
}

if(d1 > d2){
    document.querySelector("h1").innerHTML="Player 1 wins !";
}else if(d2 > d1){
    document.querySelector("h1").innerHTML="Player 2 wins !";
}else{
    document.querySelector("h1").innerHTML="It's a tie !";
}