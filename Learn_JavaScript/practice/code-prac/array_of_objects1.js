/*
Assignment
Write a function that takes an array of users as inputs and returns only the
users who are more than 18 years old and are Male
*/
function Ass() {
    function is18(users) {
        return users.age >= 18;
    }

    const users = [
        { name: "Alice", age: 25, gender: "Female" },
        { name: "Bob", age: 17, gender: "Male" },
        { name: "Charlie", age: 30, gender: "Male" },
        { name: "David", age: 16, gender: "Female" }
    ];

    const adults = users.filter(is18);
    console.log(adults)

    console.log()

    function isMale(adults) {
        return adults.gender === "Male";
    }

    const adultMale = adults.filter(isMale)
    console.log("18+ Male users are = ", adultMale);
}

Ass();