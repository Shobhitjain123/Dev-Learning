let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let randomDice1 = "images/dice" + randomNumber1 + ".png";
let randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDice1);
document.querySelector(".img2").setAttribute("src", randomDice2);

if(randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩Player 1 Wins!"
}
else if(randomNumber2 > randomNumber1){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!🚩"
}
else{
    document.getElementsByTagName("h1")[0].innerHTML = "DRAW!"
}