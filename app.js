function rollDice(){
    let firstDice = Math.floor(Math.random() * 6) +1;
    let secondDice = Math.floor(Math.random() * 6) +1;
    let thirdDice = Math.floor(Math.random() * 6) +1;
    let fourthDice = Math.floor(Math.random() * 6) +1;
    let fifthDice = Math.floor(Math.random() * 6) +1;

let Dice1 = document.getElementById("Dice1");
Dice1.innerHTML = firstDice;
let Dice2 = document.getElementById("Dice2");
Dice2.innerHTML = secondDice;
let Dice3 = document.getElementById("Dice3");
Dice3.innerHTML = thirdDice;
let Dice4 = document.getElementById("Dice4");
Dice4.innerHTML = fourthDice;
let Dice5 = document.getElementById("Dice5");
Dice5.innerHTML = fifthDice;
}
