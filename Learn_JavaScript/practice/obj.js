/*
let user = {
    name: "Srijit",
    age: 19,
    gender: "Male"
}

function greet(user){
    console.log("Hello " + user.name + " your age is " + user.age + " your gender is " + user.gender)
}
greet(user)
*/

/*const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
}
console.log(book)*/


const car = {
    model: "BMW",
    year: 2020,
    color: "Matte-Black",
    used: false
}
function myCar() {
    if (car.used == true) {
        console.log(`I'm looking for a ${car.year} ${car.model} that is used.`);
    } else {
        console.log(`I'm looking for a ${car.year} ${car.model} that is new.`);

    }
}

myCar();