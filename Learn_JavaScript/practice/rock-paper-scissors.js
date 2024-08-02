const player = 0;

const computer = Math.floor(Math.random()*3);

const choices = ["Rock","Paper","Scissor"];

console.log("Player picked: " + choices[player]);
console.log("Computer picked: " + choices[computer]);

if((player === 0 && computer === 2) || (player === 1 && computer === 0) || (player === 2 && computer === 1)){
    console.log("The player won!");
} else if (player === computer){
    console.log("It's a tie!");
} else{
    console.log("The computer won!");
}