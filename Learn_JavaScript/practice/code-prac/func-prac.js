/*
function greetings() {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
  
    if (randomNumber == 1){
      console.log("Howdy!");
    } else if (randomNumber == 2) {
      console.log("Hi there!");
    } else if (randomNumber == 3) {
      console.log("Hey what's happening?");
    } else if (randomNumber == 4) {
      console.log("Hola!");
    } else {
      console.log("Heya!");
    }
}

greetings();
*/

/*
function countdown(){
  for (i=10; i>1; i--){
    console.log(i);
  }
  console.log("Blast Off! 🚀");
}

countdown()
*/

function relativeTheory(mass){
  const c = 3e8;
  let E = mass / c**2;
  console.log(E);
}

relativeTheory(50000);