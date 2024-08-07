let stoneID = document.getElementById("stone");

const randomNumber = Math.floor(Math.random() * 9) + 1;

console.log(randomNumber)

if (randomNumber === 1) {
    document.getElementById("stone").style.backgroundColor = "red";
} else if (randomNumber === 2) {
    document.getElementById("stone").style.backgroundColor = "orange";
} else if (randomNumber === 3) {
    document.getElementById("stone").style.backgroundColor = "yellow";
} else if (randomNumber === 4) {
    document.getElementById("stone").style.backgroundColor = "green";
} else if (randomNumber === 5) {
    document.getElementById("stone").style.backgroundColor = "blue";
} else if (randomNumber === 6) {
    document.getElementById("stone").style.backgroundColor = "#4169e1";
} else if (randomNumber === 7) {
    document.getElementById("stone").style.backgroundColor = "#00008b";
} else if (randomNumber === 8) {
    document.getElementById("stone").style.backgroundColor = "purple";
} else if (randomNumber === 9) {
    document.getElementById("stone").style.backgroundColor = "black";
} else {
    console.log("Invalid number");
}