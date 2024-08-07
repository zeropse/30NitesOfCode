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
console.log(book)
*/


/*
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
*/

/*const user = {
    username: "@emmachamberlain",
    location: "Los Angeles, CA",
    followers: 15725078,
    following: 3,
    verified: false
};

user.verified = true;
user.location = "🌐";

console.log(user);*/

/*pokemon = {
    name: "Pikachu",
    type: "Electric ⚡️",
    level: 25,
}

pokemon.isCaught = true;
pokemon.name = "Chuzy";

console.log(pokemon)*/

/*farmAnimals = {
    name: "Kernel",
    type: "dog",
    age: 5,
    makeSound() {
        console.log(`${farmAnimals.name} is a ${farmAnimals.age} year old ${farmAnimals.type} that goes woof!`);
    }
}

farmAnimals.makeSound();*/

departTripTicket = {
    name: "Srijit",
    from: "Kolkata",
    to: "Delhi",
    businessClass: false,
    upgrade() {
        if (this.businessClass === false) {
            this.businessClass = true;
        } else {
            console.log("Your Ticket is already business class!");
        }
    },
    leaveTime: 15,
    arriveTime: 22,
    flightTime() {
        let travelTime = this.arriveTime - this.leaveTime;
        console.log(`Total time taken is = ${travelTime} hours.`);
    }
}


returnTripTicket = {
    name: "Srijit",
    from: "Delhi",
    to: "Kolkata",
    businessClass: true,
    upgrade() {
        if (this.returnTripTicket.businessClass === false) {
            this.businessClass = true;
        } else {
            console.log("Your Ticket is already business class!");
        }
    },
    leaveTime: 10,
    arriveTime: 16,
    flightTime() {
        let travelTime = this.arriveTime - this.leaveTime;
        console.log(`Total time taken is = ${travelTime} hours.`);
    }
}

//departTripTicket.upgrade()
console.log(departTripTicket.flightTime())

//returnTripTicket.upgrade()
console.log(returnTripTicket.flightTime())