/*const users = ["harkirat", "raman", "diljeet"];
const totalUsers = users.length;
const firstUser = users[0];

console.log(totalUsers)*/

/*
Assignment
Write a function that takes an array of numbers as input, and returns a new array
 with only even values. Read about filter in JS
*/


function Ass(...nums) {
    const num = [...nums];
    console.log(`Your original array is ${num}`);
    console.log();
    function isEven(num) {
        return num % 2 === 0;

    }
    const evenNumbers = num.filter(isEven);

    console.log(`Even Numbers are: ${evenNumbers}`);
}

Ass(5, 2, 64, 56, 77, 0);