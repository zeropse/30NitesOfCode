/*
Inside an index.js file, create the following variables:

A multiple variable that should be set to an integer above 0.
A numbers array of integers 0 through 9.

Then, use a for loop to iterate through the numbers array and multiply a given number by multiple each
time. Then, print the results to the Console. If you chose 9 for your multiple, the output should 
look like this:

9 x 0 = 0
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81

*/

let multiple = 9;
let numbers = [0,1,2,3,4,5,6,7,8,9,10];

for (i = 0; i < numbers.length ; i++){
    console.log(`${multiple} x ${i} = ${multiple*i}`)
}