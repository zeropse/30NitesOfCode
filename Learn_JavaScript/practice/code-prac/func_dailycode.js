/* 
Assignment #1
Write a function that takes a user as an input and greets them with their name and age

function Ass1(name){
    console.log(`Hello ${name}`);
}

Ass1(`Srijit`); 
/*

/*
Assignment #2
Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
Assignment #3
Also tell the user if they are legal to vote or not
*/



function Ass2nd3(name,age,gender){
    const obj = {
        name: name,
        age: age,
        gender: gender
    }

    if (obj.gender === "Male"){
        console.log(`Hi Mr.${obj.name} you are ${obj.age} years old.`);
    } else if (obj.gender === "Female"){
        console.log(`Hi Mrs.${obj.name} you are ${obj.age} years old.`);
    } else{
        console.log("ERROR GENDER.. THERE ARE ONLY 2 GENDERS IN THE WORLD")
    }   
        if(obj.age >= 18 ){
            console.log(`You are Eligible to vote.`)
        } else {
            console.log(`You are NOT Eligible to vote.`)
        }
}

Ass2nd3("Srijit",20,"Male");